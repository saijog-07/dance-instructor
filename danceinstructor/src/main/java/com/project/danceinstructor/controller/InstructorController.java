package com.project.danceinstructor.controller;

import com.project.danceinstructor.model.Instructor;
import com.project.danceinstructor.service.InstructorService;
import com.project.danceinstructor.exception.InvalidTeachingStyleException;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class InstructorController {

    @Autowired
    private InstructorService instructorService;

    @PostMapping("/addInstructor")
    public ResponseEntity<Instructor> addInstructor(@Valid @RequestBody Instructor instructor) {
        Instructor savedInstructor = instructorService.addInstructor(instructor);
        return ResponseEntity.status(201).body(savedInstructor);
    }

    @GetMapping("/getAllInstructors")
    public ResponseEntity<List<Instructor>> getAllInstructors() {
        return ResponseEntity.ok(instructorService.getAllInstructors());
    }

    @ExceptionHandler(InvalidTeachingStyleException.class)
    public ResponseEntity<String> handleInvalidTeachingStyle(InvalidTeachingStyleException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}

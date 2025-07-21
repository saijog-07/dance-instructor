package com.project.danceinstructor.service;

import com.project.danceinstructor.model.Instructor;
import com.project.danceinstructor.repository.InstructorRepo;
import com.project.danceinstructor.exception.InvalidTeachingStyleException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InstructorService {

    @Autowired
    private InstructorRepo instructorRepo;

    public Instructor addInstructor(Instructor instructor) {
        if (instructor.getTeachingStyle() == null || instructor.getTeachingStyle().trim().isEmpty()) {
            throw new InvalidTeachingStyleException("Teaching Style cannot be empty.");
        }
        return instructorRepo.save(instructor);
    }

    public List<Instructor> getAllInstructors() {
        return instructorRepo.findAll();
    }
}

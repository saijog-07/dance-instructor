package com.project.danceinstructor.repository;

import com.project.danceinstructor.model.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstructorRepo extends JpaRepository<Instructor, Integer> {
}

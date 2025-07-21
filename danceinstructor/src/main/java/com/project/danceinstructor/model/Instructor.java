package com.project.danceinstructor.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

@Entity
public class Instructor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    @NotBlank(message = "Name cannot be blank.")
    private String name;

    private String teachingStyle;

    @Column(nullable = false)
    @NotBlank(message = "Dance speciality cannot be blank.")
    private String danceSpeciality;

    @Column(nullable = false)
    @NotBlank(message = "Availability cannot be blank.")
    private String availability;

    @Column(nullable = false)
    @NotBlank(message = "Phone number cannot be blank.")
    @Size(min = 10, max = 10, message = "Phone number must be exactly 10 digits.")
    private String phoneNumber;

}

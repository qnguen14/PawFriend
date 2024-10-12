package fu.se.PawFund.controller;

import fu.se.PawFund.entity.Shelter;
import fu.se.PawFund.service.ShelterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shelters")
public class ShelterController {

    @Autowired
    private ShelterService shelterService;

    @PostMapping
    public Shelter addShelter(@RequestBody Shelter shelter) {
        return shelterService.addShelter(shelter);
    }

    @GetMapping
    public List<Shelter> getAllShelters() {
        return shelterService.getAllShelters();
    }

    @GetMapping("/{id}")
    public Shelter updateShelter(@PathVariable int id, @RequestBody Shelter shelter) {
        shelter.setShelterID(id);
        return shelterService.updateShelter(shelter);
    }

    @DeleteMapping("/{id}")
    public String deleteShelter(@PathVariable int id) {
        shelterService.deleteShelter(id);
        return "Shelter with ID: " + id + " has been deleted!";
    }
}

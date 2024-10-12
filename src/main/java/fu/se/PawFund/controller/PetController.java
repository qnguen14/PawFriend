package fu.se.PawFund.controller;

import fu.se.PawFund.entity.Pet;
import fu.se.PawFund.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pets")
public class PetController {

    @Autowired
    private PetService petService;

    @PostMapping
    public Pet addPet(@RequestBody Pet pet) {
        return petService.addPet(pet);
    }

    @GetMapping
    public List<Pet> getAllPets() {
        return petService.getAllPets();
    }

    @GetMapping("/{id}")
    public Pet getPetById(@PathVariable int id) {
        return petService.getPetById(id);
    }

    @GetMapping("/available")
    public List<Pet> getAvailablePets() {
        return petService.getAvailablePets();
    }

    // Sửa lại URL để lấy danh sách thú cưng theo shelter ID
    @GetMapping("/shelter/{shelterID}")
    public List<Pet> getPetsByShelter(@PathVariable int shelterID) {
        return petService.getPetsByShelter(shelterID);
    }

    @PutMapping("/{id}")
    public Pet updatePet(@PathVariable int id, @RequestBody Pet pet) {
        pet.setPetID(id);
        return petService.updatePet(pet);
    }

    @DeleteMapping("/{id}")
    public String deletePet(@PathVariable int id) {
        petService.deletePet(id);
        return "Pet with ID: " + id + " has been deleted!";
    }
}

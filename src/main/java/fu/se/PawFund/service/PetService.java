package fu.se.PawFund.service;

import fu.se.PawFund.entity.Pet;
import fu.se.PawFund.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetService {
    @Autowired
    private PetRepository petRepository;

    public Pet addPet(Pet pet) {
        return petRepository.save(pet);
    }

    public List<Pet> getAllPets() {
        return petRepository.findAll();
    }

    public List<Pet> getAvailablePets() {
        return petRepository.findByAvailable(true);
    }

    // Sửa lại phương thức để dùng `findByShelter_ShelterID`
    public List<Pet> getPetsByShelter(int shelterID) {
        return petRepository.findByShelter_ShelterID(shelterID);
    }

    public Pet getPetById(int id) {
        return petRepository.findById(id).orElse(null);
    }

    public Pet updatePet(Pet pet) {
        return petRepository.save(pet);
    }

    public void deletePet(int id) {
        petRepository.deleteById(id);
    }
}

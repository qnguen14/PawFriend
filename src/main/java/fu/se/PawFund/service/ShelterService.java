package fu.se.PawFund.service;

import fu.se.PawFund.entity.Shelter;
import fu.se.PawFund.repository.ShelterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShelterService {
    @Autowired
    private ShelterRepository shelterRepository;

    public Shelter addShelter(Shelter shelter){
        return shelterRepository.save(shelter);
    }

    public List<Shelter> getAllShelters(){
        return shelterRepository.findAll();
    }

    public Shelter getShelterById(int id){
        return shelterRepository.findById(id).orElse(null);
    }

    public Shelter updateShelter(Shelter shelter){
        return shelterRepository.save(shelter);
    }

    public void deleteShelter(int id){
        shelterRepository.deleteById(id);
    }
}

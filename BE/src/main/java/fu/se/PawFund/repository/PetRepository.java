package fu.se.PawFund.repository;

import fu.se.PawFund.entity.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Integer> {
    // Sửa đổi phương thức để ánh xạ đúng đến thuộc tính shelterID trong đối tượng Shelter
    List<Pet> findByShelter_ShelterID(int shelterID);

    List<Pet> findByAvailable(boolean available);
}

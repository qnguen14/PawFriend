package fu.se.PawFund.service;

import fu.se.PawFund.entity.Donation;
import fu.se.PawFund.entity.User;
import fu.se.PawFund.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DonationService {

    @Autowired
    private DonationRepository donationRepository;

    public Donation makeDonation(User user, double amount, boolean isAnonymous, String paymentMethod) {
        Donation donation = new Donation();
        donation.setUser(user);
        donation.setAmount(amount);
        donation.setAnonymous(isAnonymous);
        donation.setPaymentMethod(paymentMethod);
        donation.setStatus("Pending");

        // Save the donation
        return donationRepository.save(donation);
    }

    public List<Donation> getDonationsByUser(Long userId) {
        return donationRepository.findAll().stream()
                .filter(donation -> donation.getUser() != null && donation.getUser().getUserID() == userId)
                .collect(Collectors.toList());
    }

}

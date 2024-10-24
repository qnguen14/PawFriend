package fu.se.PawFund.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentService {

    @Autowired
    public PaymentService() {
        Stripe.apiKey = "your-stripe-secret-key";
    }

    public Charge processPayment(String token, double amount) throws StripeException {
        Map<String, Object> chargeParams = new HashMap<>();
        chargeParams.put("amount", (int) (amount * 100));  // Stripe requires amount in cents
        chargeParams.put("currency", "usd");
        chargeParams.put("source", token);  // Card token generated from the frontend
        chargeParams.put("description", "Adoption Fee");

        return Charge.create(chargeParams);
    }
}


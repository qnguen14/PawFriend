package fu.se.PawFund.service;

import fu.se.PawFund.dto.request.LoginRequest;
import fu.se.PawFund.entity.User;
import fu.se.PawFund.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder; // Tiêm vào PasswordEncoder

    // Thêm người dùng mới và mã hóa mật khẩu
    public User addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword())); // Mã hóa mật khẩu
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById((long) id).orElse(null);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(int id) {
        userRepository.deleteById((long) id);
    }

    // Kiểm tra đăng nhập
    public boolean login(LoginRequest request) {
        Optional<User> user = userRepository.findByEmail(request.getEmail());

        if (!user.isPresent()) {
            throw new RuntimeException("User not found with email: " + request.getEmail());
        }

        // So sánh mật khẩu đã mã hóa
        return passwordEncoder.matches(request.getPassword(), user.get().getPassword());
    }
}

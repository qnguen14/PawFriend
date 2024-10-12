package fu.se.PawFund.service;

import fu.se.PawFund.dto.request.LoginRequest;
import fu.se.PawFund.dto.request.UserCreationRequest;
import fu.se.PawFund.entity.User;
import fu.se.PawFund.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User addUser(User user) {
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

    public User createUser(UserCreationRequest request) {
        // Kiểm tra xem email đã tồn tại chưa
        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Email đã tồn tại");
        }

        // Tạo người dùng mới
        User users = new User();
        users.setName(request.getName());
        users.setEmail(request.getEmail());
        users.setPassword(request.getPassword());
        users.setPhone(request.getPhone());
        users.setAddress(request.getAddress());
        users.setRole(request.getRole());
        return userRepository.save(users);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUser(String userId) {
        return userRepository.findById(Long.parseLong(userId))
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User login(LoginRequest request) {
        // Kiểm tra thông tin đăng nhập
        Optional<User> users = userRepository.findByEmail(request.getEmail());

        // Thêm kiểm tra nếu user không tồn tại
        if (!users.isPresent()) {
            throw new RuntimeException("User not found with email: " + request.getEmail());
        }

        // Kiểm tra mật khẩu
        if (users.get().getPassword().equals(request.getPassword())) {
            return users.get();
        } else {
            throw new RuntimeException("Email hoặc mật khẩu không đúng");
        }
    }
}

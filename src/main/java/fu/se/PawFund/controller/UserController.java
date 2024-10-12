package fu.se.PawFund.controller;

import fu.se.PawFund.dto.request.LoginRequest;
import fu.se.PawFund.entity.User;
import fu.se.PawFund.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    // API đăng nhập
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
            boolean isAuthenticated = userService.login(loginRequest);  // Truyền LoginRequest
        if (isAuthenticated) {
            return "Login successful!";
        } else {
            return "Invalid credentials!";
        }
    }

    // API thêm người dùng mới
    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    // API lấy danh sách tất cả người dùng
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // API lấy người dùng theo ID
    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    // API cập nhật người dùng
    @PutMapping("/{id}")
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        user.setUserID(id);
        return userService.updateUser(user);
    }

    // API xóa người dùng
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return "User with ID: " + id + " has been deleted!";
    }
}

package fu.se.PawFund.dto.request;

import fu.se.PawFund.entity.User;

public class RoleAssignmentRequest {
    private long userId;
    private User.Role role;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public User.Role getRole() {
        return role;
    }

    public void setRole(User.Role role) {
        this.role = role;
    }
}

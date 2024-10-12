package fu.se.PawFund.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "shelters")
public class Shelter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int shelterID;
    private String shelterName;
    private String shelterStaff;
    private String phone;
    private String address;
    private boolean available;

    // Getters và Setters
    public int getShelterID() {
        return shelterID;
    }

    public void setShelterID(int shelterID) {
        this.shelterID = shelterID;
    }

    public String getShelterName() {
        return shelterName;
    }

    public void setShelterName(String shelterName) {
        this.shelterName = shelterName;
    }

    public String getShelterStaff() {
        return shelterStaff;
    }

    public void setShelterStaff(String shelterStaff) {
        this.shelterStaff = shelterStaff;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean getAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }
}

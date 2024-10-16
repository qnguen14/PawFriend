package fu.se.PawFund.entity;

import jakarta.persistence.*;

@Entity
@Table(name="pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int petID;

    @ManyToOne
    @JoinColumn(name = "shelterID")
    private Shelter shelter;
    private String Name;
    private String category;
    private int age;
    private double fee;
    private String size;
    private String picture;
    private boolean isNeutered;
    private boolean available;
    private String color;
    private String breed;
    private String gender;
    private String reasonOfRehoming;
    private String location;

    public Pet() {
    }

    public Pet(int petID, Shelter shelter, String name, String category, int age, double fee, String size, String picture, boolean isNeutered, boolean available, String color, String breed, String gender, String reasonOfRehoming, String location) {
        this.petID = petID;
        this.shelter = shelter;
        Name = name;
        this.category = category;
        this.age = age;
        this.fee = fee;
        this.size = size;
        this.picture = picture;
        this.isNeutered = isNeutered;
        this.available = available;
        this.color = color;
        this.breed = breed;
        this.gender = gender;
        this.reasonOfRehoming = reasonOfRehoming;
        this.location = location;
    }

    public int getPetID() {
        return petID;
    }

    public void setPetID(int petID) {
        this.petID = petID;
    }

    public Shelter getShelter() {
        return shelter;
    }

    public void setShelter(Shelter shelter) {
        this.shelter = shelter;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getFee() {
        return fee;
    }

    public void setFee(double fee) {
        this.fee = fee;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public boolean isNeutered() {
        return isNeutered;
    }

    public void setNeutered(boolean neutered) {
        isNeutered = neutered;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getReasonOfRehoming() {
        return reasonOfRehoming;
    }

    public void setReasonOfRehoming(String reasonOfRehoming) {
        this.reasonOfRehoming = reasonOfRehoming;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}

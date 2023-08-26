public class Singleton {
    private static Singleton instance;
    private String fakeData;

    private Singleton() {
      
        fakeData = "This is some fake data.";
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public String getFakeData() {
        return fakeData;
    }

    public void setFakeData(String newData) {
        fakeData = newData;
    }

    public void displayFakeData() {
        System.out.println("Fake Data: " + fakeData);
    }

  
}

document.getElementById('colorBtn').addEventListener('click', function() {
    const title = document.getElementById('main-title');
    title.style.color = title.style.color === 'red' ? '#333' : 'red';
});

// adding java code for conflicts

public class CheckNumber {
    public static void main(String[] args) {
        int number = 20;
        
        if (number > 15) {
            System.out.println("The number is greater than 15.");
        } else {
            System.out.println("The number is 15 or less.");
        }
    }
}

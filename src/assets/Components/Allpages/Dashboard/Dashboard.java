// This creates a simple bar chart for student information

import javax.swing.*;
import java.awt.*;

public class StudentBarChart extends JPanel {

    // Sample data
    private final String[] labels = {
            "Semester 1",
            "Semester 2",
            "Semester 3",
            "Semester 4",
            "Semester 5",
            "Semester 6",
            "Semester 7",
            "Semester 8",
            "Semester 9",
            "Semester 10",
            "Semester 11",
            "Semester 12",
    };

    private final int[] values = {
            8,
            10,
            12,
            12,
            13,
            10,
            12,
            12,
            12,
            12,
            12,
            12,

    };

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        Graphics2D g2d = (Graphics2D) g;

        // Better text quality
        g2d.setRenderingHint(
                RenderingHints.KEY_ANTIALIASING,
                RenderingHints.VALUE_ANTIALIAS_ON
        );

        int width = getWidth();
        int height = getHeight();

        int padding = 60;
        int barWidth = 70;
        int gap = 30;

        // Title
        g2d.setFont(new Font("Arial", Font.BOLD, 22));
        g2d.drawString("Student Information Bar Chart", 180, 30);

        // Draw X and Y axis
        g2d.drawLine(padding, height - padding, width - padding, height - padding); // X-axis
        g2d.drawLine(padding, padding, padding, height - padding); // Y-axis

        // Find max value
        int maxValue = Integer.MIN_VALUE;
        for (int value : values) {
            if (value > maxValue) {
                maxValue = value;
            }
        }

        // Draw bars
        int x = padding + 30;

        for (int i = 0; i < values.length; i++) {
            int barHeight = (int) ((double) values[i] / maxValue * (height - 2 * padding));

            int y = height - padding - barHeight;

            // Bar
            g2d.setColor(new Color(70, 130, 180));
            g2d.fillRect(x, y, barWidth, barHeight);

            // Value above bar
            g2d.setColor(Color.BLACK);
            g2d.drawString(String.valueOf(values[i]), x + 20, y - 10);

            // Label below bar
            g2d.drawString(labels[i], x - 5, height - padding + 20);

            x += barWidth + gap;
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Bar Chart - Java 21");

        StudentBarChart chart = new StudentBarChart();

        frame.add(chart);
        frame.setSize(900, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLocationRelativeTo(null); // center screen
        frame.setVisible(true);
    }
}
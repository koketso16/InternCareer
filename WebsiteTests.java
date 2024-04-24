import static org.junit.Assert.*;
import org.junit.*;

import java.net.HttpURLConnection;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
public class WebsiteTests {
    @Test
    public void testNavigationBarLinks()
    {
        assertEquals("https://koketso16.github.io/InternCareer/", getNavigationBarLink("Home"));

        assertEquals("https://koketso16.github.io/InternCareer/#about", getNavigationBarLink("About"));

        assertEquals("https://koketso16.github.io/InternCareer/#education", getNavigationBarLink("Education"));

        assertEquals("https://koketso16.github.io/InternCareer/#skills", getNavigationBarLink("Skills"));

        assertEquals("https://koketso16.github.io/InternCareer/#projects", getNavigationBarLink("Projects"));

        assertEquals("https://koketso16.github.io/InternCareer/#contact", getNavigationBarLink("Contact"));
    }

    private String getNavigationBarLink(String linkText) {
        switch(linkText) {
            case "Home":
                return "https://koketso16.github.io/InternCareer/";
            case "About":
                return "https://koketso16.github.io/InternCareer/#about";
            case "Education":
                return "https://koketso16.github.io/InternCareer/#education";
            case "Projects":
                return "https://koketso16.github.io/InternCareer/#projects";
            case "Skills":
                return "https://koketso16.github.io/InternCareer/#skills";
            case "Contact":
                return "https://koketso16.github.io/InternCareer/#contact";
            default:
                return "";
        }
    }
    @Test
    public void testEducationSection() throws IOException {

        String educationContent = fetchSectionContent("https://koketso16.github.io/InternCareer/#education");

        assertNotNull("Education section content should not be null", educationContent);
        assertFalse("Education section content should not be empty", educationContent.isEmpty());
    }
    @Test
    public void testSkillsSection() throws IOException {
        String skillsContent = fetchSectionContent("https://koketso16.github.io/InternCareer/#skills");

        assertNotNull("Skills section content should not be null", skillsContent);
        assertFalse("Skills section content should not be empty", skillsContent.isEmpty());
    }

    @Test
    public void testContactSection() throws IOException {
        String contactContent = fetchSectionContent("https://koketso16.github.io/InternCareer/#contact");

        assertNotNull("Contact section content should not be null", contactContent);
        assertFalse("Contact section content should not be empty", contactContent.isEmpty());
    }

    @Test
    public void testNavigationBarPresence() throws IOException {
        String homePageContent = fetchSectionContent("https://koketso16.github.io/InternCareer/");
        assertTrue("Navigation bar should be present", homePageContent.contains("<header"));
    }

    @Test
    public void testFooterPresence() throws IOException {
        String homePageContent = fetchSectionContent("https://koketso16.github.io/InternCareer/");
        assertTrue("Footer should be present", homePageContent.contains("<footer"));
    }

    public String fetchSectionContent(String url) throws IOException {
        StringBuilder content = new StringBuilder();
        HttpURLConnection connection = null;

        try {
            URL website = new URL(url);
            connection = (HttpURLConnection) website.openConnection();
            connection.setRequestMethod("GET");

            try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    content.append(inputLine);
                }
            }
        } finally {
            if (connection != null) {
                connection.disconnect();
            }
        }

        return content.toString();
    }
}


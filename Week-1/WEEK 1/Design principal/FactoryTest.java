// Example-2



// Document Interface
interface Document {
    void open();
}

// Word Document
class WordDocument implements Document {
    public void open() {
        System.out.println("Opening Word Document");
    }
}

// PDF Document
class PdfDocument implements Document {
    public void open() {
        System.out.println("Opening PDF Document");
    }
}

// Excel Document
class ExcelDocument implements Document {
    public void open() {
        System.out.println("Opening Excel Document");
    }
}

// Abstract Factory
abstract class DocumentFactory {
    public abstract Document createDocument();
}

// Word Factory
class WordFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}

// PDF Factory
class PdfFactory extends DocumentFactory {
    public Document createDocument() {
        return new PdfDocument();
    }
}

// Excel Factory
class ExcelFactory extends DocumentFactory {
    public Document createDocument() {
        return new ExcelDocument();
    }
}


//Test
public class FactoryTest {

    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordFactory();
        Document word = wordFactory.createDocument();
        word.open();

        DocumentFactory pdfFactory = new PdfFactory();
        Document pdf = pdfFactory.createDocument();
        pdf.open();

        DocumentFactory excelFactory = new ExcelFactory();
        Document excel = excelFactory.createDocument();
        excel.open();
    }
}
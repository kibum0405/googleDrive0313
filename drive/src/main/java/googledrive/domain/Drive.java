package googledrive.domain;

import googledrive.DriveApplication;
import googledrive.domain.FileUploaded;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Drive_table")
@Data
public class Drive {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fileName;

    private String fileType;

    private Long userId;

    private Date uploadedDate;

    private String state;

    private Integer fileSize;

    @PostPersist
    public void onPostPersist() {
        FileUploaded fileUploaded = new FileUploaded(this);
        fileUploaded.publishAfterCommit();
    }

    public static DriveRepository repository() {
        DriveRepository driveRepository = DriveApplication.applicationContext.getBean(
            DriveRepository.class
        );
        return driveRepository;
    }
}

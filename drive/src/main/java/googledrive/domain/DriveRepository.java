package googledrive.domain;

import googledrive.domain.*;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "drives", path = "drives")
public interface DriveRepository
    extends PagingAndSortingRepository<Drive, Long> {}

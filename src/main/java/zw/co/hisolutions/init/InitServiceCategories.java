package zw.co.hisolutions.init;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import zw.co.hisolutions.core.entity.ServiceCategory;
import zw.co.hisolutions.core.service.ServiceCategoryService;
import zw.co.hisolutions.storage.entity.DocumentMetadata;

/**
 *
 * @author dgumbo
 */
public class InitServiceCategories {

    final ServiceCategoryService serviceCategoryService;
    final List<DocumentMetadata> docs;

    public InitServiceCategories(ServiceCategoryService serviceCategoryService, List<DocumentMetadata> docs) {
        this.serviceCategoryService = serviceCategoryService;
        this.docs = docs;
    }

    public List<ServiceCategory> init() {
        List<ServiceCategory> serviceCategories = new ArrayList();

        serviceCategories.add(initWebDesignSC());
        serviceCategories.add(initTrainingSC());
        serviceCategories.add(initHardwareSC());
        serviceCategories.add(initConsultancySC());

        return serviceCategories;
    }

    public ServiceCategory initWebDesignSC() {
        String serviceCategoryName = "Affordable Professional Web Design and Hosting Services";
        String scShortName = "webdesign";

        ServiceCategory serviceCategory = serviceCategoryService.findByName(serviceCategoryName);
        if (serviceCategory == null) {
            serviceCategory = new ServiceCategory();
            serviceCategory.setName(serviceCategoryName);
            serviceCategory.setShortName(scShortName);
            serviceCategory.setDescription("<p>We offer proffesional and affordable web design and web hosting services."
                    + " We use the latest models and frameworks to give your visitors that user expirience that will see "
                    + " your products get the proper advetisement needed.</p>");
            serviceCategory.setDisplayContent("<p>We offer proffesional and affordable web design and web hosting services."
                    + " We use the latest models and frameworks to give your visitors that user expirience that will see "
                    + " your products get the proper advetisement needed.</p>"
                    + "<p>We design your websites and or web applications using various technologies and frameworks that include but not limited to -:"
                    + "<ul>"
                    + "<li>Java <i class=\"fa fa-coffee\"></i> <i>Spring MVC Framework</i></li>"
                    + "<li>HTML5 <i class=\"fa fa-html5\"></i></li>"
                    + "<li>CSS3 <i class=\"fa fa-css3\"></i></li>"
                    + "<li>AngularJS <i class=\"fab fa-angular\"></i></li>"
                    + "<li>PHP <i class=\"fa fa-php\"></i> </li>"
                    + "<li>Bootstrap 4 <i class=\"fa fa-bootstrap\"></i> and</li>"
                    + "<li>Javascript <i class=\"fa fa-javascript\"></i>.</li>"
                    + "</ul></p>"
                    + "<p>below is a detailed listing of products we offer under this service category.</p>");

            serviceCategory.setImageMetadata(getDocumentMetadata("showcase.jpg"));
            serviceCategory.setThumbnailMetadata(getDocumentMetadata("html5"));

            try {
                serviceCategory = serviceCategoryService.create(serviceCategory);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
        return serviceCategory;
    }

    public ServiceCategory initTrainingSC() {
        String serviceCategoryName = "Training Services for IT Related Products and Technologies";
        String scShortName = "training";

        ServiceCategory serviceCategory = serviceCategoryService.findByName(serviceCategoryName);
        if (serviceCategory == null) {
            serviceCategory = new ServiceCategory();
            serviceCategory.setName(serviceCategoryName);
            serviceCategory.setShortName(scShortName);
            serviceCategory.setDescription(serviceCategoryName);
            serviceCategory.setDisplayContent("<p>" + serviceCategory + "</p>");

            serviceCategory.setImageMetadata(getDocumentMetadata("showcase.jpg"));
            serviceCategory.setThumbnailMetadata(getDocumentMetadata("html5"));

            try {
                serviceCategory = serviceCategoryService.create(serviceCategory);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
        return serviceCategory;
    }

    public ServiceCategory initHardwareSC() {
        String serviceCategoryName = "Database Administration";
        String scShortName = "hardware";

        ServiceCategory serviceCategory = serviceCategoryService.findByName(serviceCategoryName);
        if (serviceCategory == null) {
            serviceCategory = new ServiceCategory();
            serviceCategory.setName(serviceCategoryName);
            serviceCategory.setShortName(scShortName);
            serviceCategory.setDescription(serviceCategoryName);
            serviceCategory.setDisplayContent("<p>" + serviceCategoryName + "</p>");

            serviceCategory.setImageMetadata(getDocumentMetadata("showcase.jpg"));
            serviceCategory.setThumbnailMetadata(getDocumentMetadata("html5"));
            try {
                serviceCategory = serviceCategoryService.create(serviceCategory);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
        return serviceCategory;
    }

    public ServiceCategory initConsultancySC() {
        String serviceCategoryName = "Database Administration";
        String scShortName = "consultancy";

        ServiceCategory serviceCategory = serviceCategoryService.findByName(serviceCategoryName);
        if (serviceCategory == null) {
            serviceCategory = new ServiceCategory();
            serviceCategory.setName(serviceCategoryName);
            serviceCategory.setShortName(scShortName);
            serviceCategory.setDescription(serviceCategoryName);
            serviceCategory.setDisplayContent("<p>" + serviceCategoryName + "</p>");

            serviceCategory.setImageMetadata(getDocumentMetadata("showcase.jpg"));
            serviceCategory.setThumbnailMetadata(getDocumentMetadata("html5"));
            try {
                serviceCategory = serviceCategoryService.create(serviceCategory);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
        return serviceCategory;
    }

    DocumentMetadata getDocumentMetadata(String DocumentName) {
        DocumentMetadata documentMetadata = null;
        if (docs != null && docs.stream().anyMatch(p -> p.getFilename().contains(DocumentName))) {
            documentMetadata = docs.stream().filter(p -> p.getFilename().contains(DocumentName)).findAny().get();
        }
        return documentMetadata;
    }
}

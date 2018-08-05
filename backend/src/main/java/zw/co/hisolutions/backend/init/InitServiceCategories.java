package zw.co.hisolutions.backend.init;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import zw.co.hisolutions.backend.core.entity.ServiceCategory;
import zw.co.hisolutions.backend.core.service.ServiceCategoryService;
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
        String serviceCategoryName = "Web Design and Hosting";
        String scShortDescription = "Affordable Professional Web Design and Hosting Services";

        ServiceCategory serviceCategory = serviceCategoryService.findByName(serviceCategoryName);
        if (serviceCategory == null) {
            serviceCategory = new ServiceCategory();
            serviceCategory.setName(serviceCategoryName);
            serviceCategory.setShortDescription(scShortDescription);
            serviceCategory.setFaIcon("fa-plus");
            serviceCategory.setDescription("We offer proffesional and affordable web design and web hosting services."
                    + " We use the latest models and frameworks to give your visitors that user expirience that will see "
                    + " your products get the proper advetisement needed.");
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
        String serviceCategoryName = "Training Services";
        String scShortDescription = "Training Services for IT Related Products and Technologies";

        ServiceCategory serviceCategory = serviceCategoryService.findByName(serviceCategoryName);
        if (serviceCategory == null) {
            serviceCategory = new ServiceCategory();
            serviceCategory.setName(serviceCategoryName);
            serviceCategory.setShortDescription(scShortDescription);
            serviceCategory.setDescription(serviceCategoryName);
            serviceCategory.setFaIcon("fa-minus");
            serviceCategory.setDisplayContent("<p>" + serviceCategory + "</p>" + "<p>Lorem ipsum dolor sit amet, te mea aperiam deleniti antiopam, ridens maluisset molestiae cu eos. Malis laoreet fabellas eum ei, mel ei prima deserunt democritum. Vis saperet adipisci eu. Eu est natum debitis, et autem delectus iracundia his. Elit persequeris usu ei, at ignota impetus blandit nam, saperet offendit id nam. Duo ex impetus consequat. Mucius maluisset cu sit, case cotidieque eum ut.</p>\n" +
"<p>Nec at mutat comprehensam. Blandit postulant ocurreret qui et, melius complectitur cu sea, eripuit alienum intellegat no sit. Ius nibh habeo atqui te, pri phaedrum perpetua ne. In est verterem incorrupte dissentiet, congue causae convenire mei et. Ad vim vero lorem persius, est an soluta sanctus. Eos an liber zril decore. Quis animal corrumpit an nam, quo ne dicit legimus periculis.</p>");

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
        String serviceCategoryName = "Hardware and Accessories Supply";
        String scShortDescription = "ICT Hardware and Accessories Sales";

        ServiceCategory serviceCategory = serviceCategoryService.findByName(serviceCategoryName);
        if (serviceCategory == null) {
            serviceCategory = new ServiceCategory();
            serviceCategory.setName(serviceCategoryName);
            serviceCategory.setShortDescription(scShortDescription);
            serviceCategory.setDescription(serviceCategoryName);
            serviceCategory.setFaIcon("fa-pencil");
            serviceCategory.setDisplayContent("<p>" + serviceCategoryName + "</p>" + "<p>Lorem ipsum dolor sit amet, te mea aperiam deleniti antiopam, ridens maluisset molestiae cu eos. Malis laoreet fabellas eum ei, mel ei prima deserunt democritum. Vis saperet adipisci eu. Eu est natum debitis, et autem delectus iracundia his. Elit persequeris usu ei, at ignota impetus blandit nam, saperet offendit id nam. Duo ex impetus consequat. Mucius maluisset cu sit, case cotidieque eum ut.</p>\n" +
"<p>Nec at mutat comprehensam. Blandit postulant ocurreret qui et, melius complectitur cu sea, eripuit alienum intellegat no sit. Ius nibh habeo atqui te, pri phaedrum perpetua ne. In est verterem incorrupte dissentiet, congue causae convenire mei et. Ad vim vero lorem persius, est an soluta sanctus. Eos an liber zril decore. Quis animal corrumpit an nam, quo ne dicit legimus periculis.</p>");

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
        String serviceCategoryName = "Consultancy Services";
        String scShortDescription = "We Offer various consultancy services which include Database Administration, General ICT Support, MIS Systems implementations";

        ServiceCategory serviceCategory = serviceCategoryService.findByName(serviceCategoryName);
        if (serviceCategory == null) {
            serviceCategory = new ServiceCategory();
            serviceCategory.setName(serviceCategoryName);
            serviceCategory.setShortDescription(scShortDescription);
            serviceCategory.setDescription(serviceCategoryName);
            serviceCategory.setFaIcon("fa-delete");
            serviceCategory.setDisplayContent("<p>" + serviceCategoryName + "</p>" + "<p>Lorem ipsum dolor sit amet, te mea aperiam deleniti antiopam, ridens maluisset molestiae cu eos. Malis laoreet fabellas eum ei, mel ei prima deserunt democritum. Vis saperet adipisci eu. Eu est natum debitis, et autem delectus iracundia his. Elit persequeris usu ei, at ignota impetus blandit nam, saperet offendit id nam. Duo ex impetus consequat. Mucius maluisset cu sit, case cotidieque eum ut.</p>\n" +
"<p>Nec at mutat comprehensam. Blandit postulant ocurreret qui et, melius complectitur cu sea, eripuit alienum intellegat no sit. Ius nibh habeo atqui te, pri phaedrum perpetua ne. In est verterem incorrupte dissentiet, congue causae convenire mei et. Ad vim vero lorem persius, est an soluta sanctus. Eos an liber zril decore. Quis animal corrumpit an nam, quo ne dicit legimus periculis.</p>");

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

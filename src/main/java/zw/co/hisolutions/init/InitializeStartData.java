package zw.co.hisolutions.init;

import java.util.Arrays;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import zw.co.hisolutions.core.entity.Audiance;
import zw.co.hisolutions.core.entity.Topic;
import zw.co.hisolutions.core.entity.DistributionMethod;
import zw.co.hisolutions.core.entity.Duration;
import zw.co.hisolutions.core.entity.DurationType;
import zw.co.hisolutions.core.entity.PreRequisite;
import zw.co.hisolutions.core.entity.Product;
import zw.co.hisolutions.core.entity.ProductType;
import zw.co.hisolutions.core.entity.ServiceCategory;
import zw.co.hisolutions.core.entity.Skill;
import zw.co.hisolutions.core.entity.Vendor;
import zw.co.hisolutions.core.service.AudianceService;
import zw.co.hisolutions.core.service.DistributionMethodService;
import zw.co.hisolutions.core.service.DurationService;
import zw.co.hisolutions.core.service.DurationTypeService;
import zw.co.hisolutions.core.service.PreRequisiteService;
import zw.co.hisolutions.core.service.ProductService;
import zw.co.hisolutions.core.service.ProductTypeService;
import zw.co.hisolutions.core.service.ServiceCategoryService;
import zw.co.hisolutions.core.service.SkillService;
import zw.co.hisolutions.core.service.VendorService;
import zw.co.hisolutions.core.service.TopicService;
import zw.co.hisolutions.documents.entity.DocumentMetadata;
import zw.co.hisolutions.documents.service.FileSystemDocumentStorageService;

/**
 *
 * @author denzil
 */
@Component
public class InitializeStartData {

    @Autowired
    DurationService durationService;
    @Autowired
    DurationTypeService durationTypeService;
    @Autowired
    DistributionMethodService distributionMethodService;
    @Autowired
    AudianceService audianceService;
    @Autowired
    ProductService productService;
    @Autowired
    ProductTypeService productTypeService;
    @Autowired
    VendorService vendorService;
    @Autowired
    TopicService courseTopicService;
    @Autowired
    PreRequisiteService preRequisiteService;
    @Autowired
    SkillService skillService;
    @Autowired
    ServiceCategoryService serviceCategoryService;
    @Autowired
    FileSystemDocumentStorageService fileSystemDocumentStorageService;

    private DurationType durationType1;
    private DurationType durationType2;
    private Duration duration1;
    private DistributionMethod distributionMethod1;
    private DistributionMethod distributionMethod2;
    private Audiance audiance1;
    private Audiance audiance2;
    private ProductType productType1;
    private ProductType productType2;
    private Product product1;
    private Vendor vendor1;
    private Vendor vendor2;
    private Product product2;
    private PreRequisite preRequisite2;
    private Topic courseTopic2;
    private PreRequisite preRequisite1;
    private Topic courseTopic1;
    private Skill skill2;
    private Skill skill1;
    private ServiceCategory serviceCategory1;
    private ServiceCategory serviceCategory2;
    private ServiceCategory serviceCategory3;
    private DocumentMetadata documenMetadata1;
    private DocumentMetadata documenMetadata2;
    private DocumentMetadata documenMetadata3;
    private DocumentMetadata documenMetadata4;
    private DocumentMetadata documenMetadata5;
    private List<DocumentMetadata> docs;

    public void init() {
        scanFileServerDirectory();
        initDurationType();
        initDuration();
        initDistributionMethod();
        initAudiance();
        initVendor();
        initProductType();
        initCourseTopic();
        initPreRequisites();
        initSkillsToGain();
        initServiceCategories();
        initProduct();
    }

    private void scanFileServerDirectory() {
        docs = fileSystemDocumentStorageService.scanServerDirectory();
        if (docs.size() >= 1) {
            documenMetadata1 = docs.get(0);
        }
        if (docs.size() >= 2) {
            documenMetadata2 = docs.get(1);
        }
        if (docs.size() >= 3) {
            documenMetadata3 = docs.get(2);
        }
        if (docs.size() >= 4) {
            documenMetadata4 = docs.get(3);
        }
        if (docs.size() >= 5) {
            documenMetadata5 = docs.get(4);
        }
    }

    private void initDurationType() {

        String durationType1Name = "Week";
        this.durationType1 = durationTypeService.findByName(durationType1Name);
        if (durationType1 == null) {
            this.durationType1 = new DurationType(durationType1Name);
            try {
                durationType1 = durationTypeService.create(durationType1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String durationType2Name = "Day";
        this.durationType2 = durationTypeService.findByName(durationType2Name);
        if (durationType2 == null) {
            this.durationType2 = new DurationType(durationType2Name);
            try {
                durationType2 = durationTypeService.create(durationType2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initDuration() {
        List<Duration> durationList = durationService.findAll();

        String duration1Name = "1";

        this.duration1 = durationList.isEmpty() ? null : durationList.stream().filter(d -> d.getName().equals(duration1Name)).findAny().get();
        if (duration1 == null) {
            duration1 = new Duration(duration1Name, durationType1);

            try {
                this.duration1 = durationService.create(duration1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String duration2Name = "1";

        Duration duration2 = durationList.isEmpty() ? null : durationList.stream().filter(d -> d.getName().equals(duration2Name)).findAny().get();
        if (duration2 == null) {
            duration2 = new Duration(duration2Name, durationType2);

            try {
                duration2 = durationService.create(duration2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initDistributionMethod() {

        List<DistributionMethod> distributionMethodList = distributionMethodService.findAll();

        String distributionMethodName1 = "Classroom";
        this.distributionMethod1 = distributionMethodList.isEmpty() ? null : distributionMethodList.stream().filter(d -> d.getName().equals(distributionMethodName1)).findFirst().get();
        if (distributionMethod1 == null) {
            this.distributionMethod1 = new DistributionMethod(distributionMethodName1);
            try {
                distributionMethod1 = distributionMethodService.create(distributionMethod1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String distributionMethodName2 = "Online Proctered";
        this.distributionMethod2 = distributionMethodList.isEmpty() ? null : distributionMethodList.stream().filter(d -> d.getName().equals(distributionMethodName2)).findFirst().get();
        if (distributionMethod2 == null) {
            this.distributionMethod2 = new DistributionMethod(distributionMethodName2);
            try {
                distributionMethod2 = distributionMethodService.create(distributionMethod2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initAudiance() {
        String audiance1Name = "Corporates";
        this.audiance1 = audianceService.findByName(audiance1Name);
        if (audiance1 == null) {
            this.audiance1 = new Audiance(audiance1Name);
            try {
                audiance1 = audianceService.create(audiance1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String audiance2Name = "Small to Medium Enterprises";
        this.audiance2 = audianceService.findByName(audiance2Name);
        if (audiance2 == null) {
            this.audiance2 = new Audiance(audiance2Name);
            try {
                audiance2 = audianceService.create(audiance2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initProductType() {

        String productType1Name = "Service";
        this.productType1 = productTypeService.findByName(productType1Name);
        if (productType1 == null) {
            this.productType1 = new ProductType(productType1Name);
            try {
                productType1 = productTypeService.create(productType1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String productType2Name = "Training";
        this.productType2 = productTypeService.findByName(productType2Name);
        if (productType2 == null) {
            this.productType2 = new ProductType(productType2Name);
            try {
                productType2 = productTypeService.create(productType2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String productType3Name = "Web Hosting";
        ProductType productType3 = productTypeService.findByName(productType3Name);
        if (productType3 == null) {
            productType3 = new ProductType(productType3Name);
            try {
                productType3 = productTypeService.create(productType3);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initVendor() {

        String vendor1Name = "Microsoft";
        this.vendor1 = vendorService.findByName(vendor1Name);
        if (vendor1 == null) {
            this.vendor1 = new Vendor(vendor1Name);
            try {
                vendor1 = vendorService.create(vendor1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String vendor2Name = "Oracle";
        this.vendor2 = vendorService.findByName(vendor2Name);
        if (vendor2 == null) {
            this.vendor2 = new Vendor(vendor2Name);
            try {
                vendor2 = vendorService.create(vendor2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initCourseTopic() {
        String courseTopic1Name = "SQL Server";
        this.courseTopic1 = courseTopicService.findByName(courseTopic1Name);
        if (courseTopic1 == null) {
            this.courseTopic1 = new Topic(courseTopic1Name, 0.7);
            try {
                courseTopic1 = courseTopicService.create(courseTopic1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String courseTopic2Name = "PRINCE2";
        this.courseTopic2 = courseTopicService.findByName(courseTopic2Name);
        if (courseTopic2 == null) {
            this.courseTopic2 = new Topic(courseTopic2Name, 0.6);
            try {
                courseTopic2 = courseTopicService.create(courseTopic2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initPreRequisites() {

        String preRequisite1Name = "Microsoft";
        this.preRequisite1 = preRequisiteService.findByName(preRequisite1Name);
        if (preRequisite1 == null) {
            this.preRequisite1 = new PreRequisite(preRequisite1Name);
            try {
                preRequisite1 = preRequisiteService.create(preRequisite1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String preRequisite2Name = "Oracle";
        this.preRequisite2 = preRequisiteService.findByName(preRequisite2Name);
        if (preRequisite2 == null) {
            this.preRequisite2 = new PreRequisite(preRequisite2Name);
            try {
                preRequisite2 = preRequisiteService.create(preRequisite2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initSkillsToGain() {
        String skill1Name = "Web Development using AngularJS";
        this.skill1 = skillService.findByName(skill1Name);
        if (skill1 == null) {
            this.skill1 = new Skill(skill1Name);
            try {
                skill1 = skillService.create(skill1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String skill2Name = "Database Administration";
        this.skill2 = skillService.findByName(skill2Name);
        if (skill2 == null) {
            this.skill2 = new Skill(skill2Name);
            try {
                skill2 = skillService.create(skill2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initServiceCategories() {
        String serviceCategory1Name = "Affordable Professional Web Design";
        this.serviceCategory1 = serviceCategoryService.findByName(serviceCategory1Name);
        if (serviceCategory1 == null) {
            DocumentMetadata sd1 = null;
            if (docs.stream().anyMatch(p -> p.getFilename().contains("showcase.jpg"))) {
                  sd1 = docs.stream().filter(p -> p.getFilename().contains("showcase.jpg")).findAny().get();
            } else {
                sd1 = documenMetadata1;
            }
            DocumentMetadata st1 = null;
            if (docs.stream().anyMatch(p -> p.getFilename().contains("html5"))) {
                  st1 = docs.stream().filter(p -> p.getFilename().contains("html5")).findAny().get();
            } else {
                st1 = documenMetadata1;
            }
            this.serviceCategory1 = new ServiceCategory();
            serviceCategory1.setName(serviceCategory1Name);
            serviceCategory1.setImageMetadata(sd1);
            serviceCategory1.setThumbnailMetadata(st1);
            serviceCategory1.setDescription(serviceCategory1Name);
            serviceCategory1.setDisplayContent("<p>" + serviceCategory1Name + "</p>");
            try {
                serviceCategory1 = serviceCategoryService.create(serviceCategory1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String serviceCategory2Name = "Database Administration";
        this.serviceCategory2 = serviceCategoryService.findByName(serviceCategory2Name);
        if (serviceCategory2 == null) {
            this.serviceCategory2 = new ServiceCategory();
            serviceCategory2.setName(serviceCategory2Name);
            serviceCategory2.setImageMetadata(documenMetadata4);
            serviceCategory2.setDescription(serviceCategory2Name);
            serviceCategory2.setDisplayContent("<p>" + serviceCategory2Name + "</p>");
            try {
                serviceCategory2 = serviceCategoryService.create(serviceCategory2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String serviceCategory3Name = "Database Administration";
        this.serviceCategory3 = serviceCategoryService.findByName(serviceCategory3Name);
        if (this.serviceCategory3 == null) {
            this.serviceCategory3 = new ServiceCategory();
            serviceCategory3.setName(serviceCategory3Name);
            serviceCategory3.setImageMetadata(documenMetadata5);
            serviceCategory3.setDescription(serviceCategory3Name);
            serviceCategory3.setDisplayContent("<p>" + serviceCategory3Name + "</p>");
            try {
                this.serviceCategory3 = serviceCategoryService.create(serviceCategory3);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }

    private void initProduct() {

        String product1Name = "Web Development";
        this.product1 = productService.findProductByName(product1Name);
        if (product1 == null) {
            DocumentMetadata d1 = null;
            if (docs.stream().anyMatch(p -> p.getFilename().contains("css3"))) {
                d1 = docs.stream().filter(p -> p.getFilename().contains("css3")).findAny().get();
            } else {
                d1 = documenMetadata1;
            }
            product1 = new Product();
            product1.setName(product1Name);
            product1.setImageMetadata(d1);
            product1.setProductType(productType1);
            product1.setDisplayContent("<p>" + product1Name + "</p>");
            product1.setServiceCategory(serviceCategory1);
            product1.setDescription(product1Name);
            product1.setPrice(1L);
            product1.setVendor(vendor1);
            product1.setAudiances(Arrays.asList(audiance1, audiance2));
            product1.setDistributionMethods(Arrays.asList(distributionMethod1, distributionMethod2));
            product1.setCourseTopics(Arrays.asList(courseTopic1, courseTopic2));
            product1.setPreRequisites(Arrays.asList(preRequisite1, preRequisite2));
            product1.setSkillsToGain(Arrays.asList(skill1, skill2));

            try {
                this.product1 = productService.create(product1);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }

        String product2Name = "Office Suite";
        this.product2 = productService.findProductByName(product2Name);
        if (product2 == null) {
            DocumentMetadata d2 = null;
            if (docs.stream().anyMatch(p -> p.getFilename().contains("html5"))) {
                d2 = docs.stream().filter(p -> p.getFilename().contains("html5")).findAny().get();
            } else {
                d2 = documenMetadata2;
            }

            product2 = new Product();
            product2.setName(product2Name);
            product2.setImageMetadata(d2);
            product2.setDisplayContent("<p>" + product2Name + "</p>");
            product2.setServiceCategory(serviceCategory2);
            product2.setProductType(productType2);
            product2.setDescription(product2Name);
            product2.setPrice(1L);
            product2.setVendor(vendor2);
            product2.setAudiances(Arrays.asList(audiance2));
            product2.setDistributionMethods(Arrays.asList(distributionMethod2));
            product2.setCourseTopics(Arrays.asList(courseTopic1));
            product2.setPreRequisites(Arrays.asList(preRequisite2));
            product2.setSkillsToGain(Arrays.asList(skill2));

            try {
                product2 = productService.create(product2);
            } catch (Exception ex) {
                Logger.getLogger(getClass().getName()).log(Level.SEVERE, null, ex);
            }
        }
    }
}

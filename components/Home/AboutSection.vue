<template>
  <!-- Start Why choose -->
  <section class="why-choose section" id="about-us">
    <div class="container">
      <!-- <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Support for individuals with disabilities</h2>
            <img src="/img/section-img.png" alt="#" />
          </div>
        </div>
      </div> -->

    <CommonSectionHeader :title="'Support for individuals with disabilities'" :subtitle="''"/>
      
      <div class="row">
        <div class="col-lg-6 col-12 px-5">
          <!-- Start Choose Left -->
          <div class="choose-left">
            <h3>About Global Health Choice</h3>
            <p>
              At Global Health Choice, we are deeply committed to providing exceptional care for individuals with intellectual and developmental disabilities. We believe that every patient deserves the opportunity to live as independently as possible, surrounded by the familiarity of their own home and community. Our professional team works tirelessly to offer personalized support that not only meets clinical needs but also fosters a true sense of belonging, dignity, and continuous personal growth. 
            </p>
            <p>
              Your satisfaction and peace of mind are the pillars of our mission. By combining professional expertise with a compassionate heart, we deliver outstanding service that empowers our patients to enjoy a meaningful and fulfilling quality of life. Whether through skilled nursing or specialized therapies, Global Health Choice remains a dedicated partner in building a brighter, more autonomous future for those we serve.
            </p>
          </div>
          <!-- End Choose Left -->
        </div>
        
        <div class="col-lg-6 col-12">
          <!-- Start Choose Rights -->
          <div class="choose-right">
            <div class="video-image">
              <!-- Placeholder pour image/vidéo -->
              <!-- <div class="image-placeholder">
                <div class="placeholder-content">
                  <i class="fa fa-image"></i>
                  <p>Visual Content Area</p>
                </div>
              </div> -->
            </div>
          </div>
          <!-- End Choose Rights -->
        </div>
      </div>
    </div>
  </section>
  <!--/ End Why choose -->
</template>

<script setup>
const props = defineProps(['aboutData']);
// Logique simple si nécessaire
// const sectionTitle = "We Offer Different Services To Patient";
// const aboutTitle = "About Global Health Choice";
// const aboutDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.";
// const detailedDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
</script>

<style scoped>
/* Styles spécifiques si nécessaire */
.why-choose {
  padding: 80px 0;
}

.image-placeholder {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 8px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.placeholder-content {
  text-align: center;
  color: #6c757d;
}

.placeholder-content i {
  font-size: 4rem;
  margin-bottom: 20px;
  color: #adb5bd;
}

.placeholder-content p {
  font-size: 1.2rem;
  margin: 0;
}

.why-choose .choose-right{
  min-height: 460px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .image-placeholder {
    height: 300px;
    margin-top: 30px;
  }
  
  .placeholder-content i {
    font-size: 3rem;
  }
  .why-choose .choose-left h3, .why-choose .choose-left p, .why-choose{
    text-align: center;
  }
}

.why-choose .choose-left h3{
  color: #0860b6;
}

.why-choose .choose-left h3:before{
  display: none;
  }
</style>
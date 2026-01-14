import { servicesData } from "/assets/data/data";

export const useServices = () => {

  // Méthodes
  const getServicesByCategory = (category) => {
    return servicesData.services.filter(
      (service) => service.category === category
    );
  };

  const getServiceById = (id) => {
    return servicesData.services.find((service) => service.id === id);
  };

  const handleServiceClick = (service) => {
    console.log(`Service clicked: ${service.title}`);
    // Vous pouvez ajouter ici:
    // - Navigation
    // - Google Analytics tracking
    // - Ouverture d'une modal
  };

  const loadMoreServices = () => {
    // Logique pour charger plus de services
    console.log("Load more services clicked");
  };

  return {
    servicesData,
    getServicesByCategory,
    getServiceById,
    handleServiceClick,
    loadMoreServices,
  };
};

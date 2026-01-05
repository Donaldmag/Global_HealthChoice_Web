export default function useDateFunction() {
    
    function getCurrentDate() {
        return new Date();
      }
    const year = getCurrentDate().getFullYear();

    return { getCurrentDate, year }
}
(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = fs.map( f => f.f );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesInDirectory: number = 33;
    
    // primer nombre - first name
    const firstName: string = 'Fernando';
    
    // primer apellido - last name
    const lastName: string = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceModification: number = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent: number = 6;


})();
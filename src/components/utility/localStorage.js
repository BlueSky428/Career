const getStoredJobApplication = () => {
    const storedJobApplications = localStorage.getItem('job-applications'); // Corrected key
    if(storedJobApplications) {
        return JSON.parse(storedJobApplications);
    }
    return [];
}

const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exist = storedJobApplications.find(jobid => jobid === id);
    if(!exist) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications)); // Corrected key
    }
}

export { saveJobApplication, getStoredJobApplication };

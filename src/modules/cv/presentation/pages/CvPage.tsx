import { CvEducation, CvExperience, CvFormation, CVHabilities, CvPersonalInfo, CvProjects } from '@/modules/cv/presentation/components';

export const CvPage = () => {

  return (
    <main>
      <CvPersonalInfo/>

      <CVHabilities/> 
      <br />

      <CvEducation />
      <br />

      <CvFormation />
      <br />

      <CvExperience />
      <br />

      <CvProjects />
    </main>
  );
}

















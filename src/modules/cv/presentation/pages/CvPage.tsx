import { CvEducation } from '@/modules/cv/presentation/components/CvEducation';
import { CvExperience } from '@/modules/cv/presentation/components/CvExperience';
import { CvFormation } from '@/modules/cv/presentation/components/CvFormation';
import { CVHabilities } from '@/modules/cv/presentation/components/CvHabilities';
import { CvPersonalInfo } from '@/modules/cv/presentation/components/CvPersonalInfo';
import { CvProjects } from '@/modules/cv/presentation/components/CvProjects';

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

















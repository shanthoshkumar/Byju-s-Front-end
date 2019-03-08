import { RouterModule, Routes } from '@angular/router';
import { SearchjobComponent } from '../searchjob/searchjob.component';
import { ListjobComponent } from '../listjob/listjob.component';


export const routes: Routes = [
    { path: 'jobsearch', component: SearchjobComponent },
    { path:'joblist',component:ListjobComponent},
    {
       path: '',
      redirectTo: '/joblist', //sets default page to be displayed to user once project runs;
      pathMatch: 'full'
  },
  ];
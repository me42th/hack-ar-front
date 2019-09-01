import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TabsRoutingModule } from './tabs-routing.module';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';


@NgModule({
  imports: [
    CommonModule,
    TabsRoutingModule,
    IonicModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

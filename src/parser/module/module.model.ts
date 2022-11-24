import { NgParselBuildingBlock } from '../shared/model/types.model';

export interface NgParselModule extends NgParselBuildingBlock {
  className: string;
  imports: string[];
  exports: string[];
  declarations: string[];
  providers: string[];
  bootstrap: string[];
}

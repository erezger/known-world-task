import {BindingOptions} from 'vuex-class/lib/bindings';

export class StoreNamespace {

  // manager namespaces
  public static readonly WORLD_MODULE: string = 'world';

  public static readonly WORLD: BindingOptions = {namespace: StoreNamespace.WORLD_MODULE};
}

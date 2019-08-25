import base from './base'
import knockout from './knockout'
import fishbase from './fishbase'
import gitflow from './gitflow'
import gitlab from './gitlab'
import kubernetes from './kubernetes'
import livereload from './livereload'
import mdm from './mdm'
import merge from './merge'
import scaleway from './scaleway'
import tko from './tko'
import vuejs from './vuejs'
import magasin from './magasin'

export default {
  base: base,
  features: [
    knockout,
    fishbase,
    gitflow,
    gitlab,
    magasin,
    kubernetes,
    livereload,
    mdm,
    merge,
    scaleway,
    tko,
    vuejs

  ],
  name: 'dev'
}

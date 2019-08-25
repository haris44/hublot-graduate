import base from './base'
import slack from './slack'
import jira from './jira'
import jirainstall from './jirainstall'
import jiravue from './jiravue'
import notions from './notions'
import scrum from './scrum'
import semver from './semver'
import magasin from './magasin'

export default {
  base: base,
  features: [
    slack,
    magasin,
    jira,
    jirainstall,
    jiravue,
    notions,
    scrum,
    semver,
  ],
  name: 'orga'

}

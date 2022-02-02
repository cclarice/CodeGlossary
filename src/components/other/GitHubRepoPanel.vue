<template>
  <section class="Git">
    <DebugPanel>
      <span style="background-color: #FF000022">
        Repository:
        {{ repository }}
      </span>
      <span style="background-color: #00FF0022">
        Contributors:
        {{ contributors }}
      </span>
    </DebugPanel>
    <div class="GitHeader">
      <img src="@/assets/logos/github.svg" width="32" height="32" alt="GitHubIcon">
      <h2 @mousedown="clickUrl($event, repository && repository.html_url)">
        {{ repository && repository.name || 'Loading...' }}
      </h2>
      <img v-if="logo" :src="logo" width="32" height="32" alt="" @click="test">
    </div>
    <div class="GitBody">
      <div class="GitBodyInfo">

      </div>
      <div class="GitBodyContributors">
        <div v-for="contributor of contributors" :key="contributor.id" @mousedown="clickUrl($event, contributor.html_url)">
          <img :src="contributor.avatar_url" alt="Avatar" width="32">
          <span>{{ contributor.login}}</span>
        </div>
      </div>
      <div class="GitBodyLanguages">

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DebugPanel from '@/components/DebugPanel.vue'
import GitHub from '@/services/GitHub'
import clickUrl from '@/library/clickUrl'

interface Data {
  [key: string]: Response | null
}

export default defineComponent({
  name: 'GitHubRepoPanel',
  components: { DebugPanel },
  data: (): Data => ({
    repository: null,
    contributors: null
  }),
  methods: {
    clickUrl,
    test () {
      console.log(window)
    }
  },
  props: {
    repLink: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      default: null
    }
  },
  created () {
    console.log(this.$options.name, 'created')
    GitHub.getRepo(this.repLink)
      .then((xhr) => {
        console.log('repo:', xhr.response)
        this.repository = xhr.response
      })
      .catch((xhr) => {
        this.repository = xhr.response
      })
    GitHub.getRepoContributors(this.repLink)
      .then((xhr) => {
        console.log('cont:', xhr.response)
        this.contributors = xhr.response
      })
      .catch((xhr) => {
        this.contributors = xhr.response
      })
  }
})
</script>

<style lang="scss" scoped>
.Git {
  display: flex;
  flex-flow: column;
  min-width: 320px;

  background-color: var(--panel-background);
  border: 1px solid var(--panel-border);
  border-radius: 6px;
  &Header {
    display: flex;
    justify-content: space-between;
    padding: 11px;
    border-bottom: 1px solid var(--panel-border);
    align-items: center;
    h2 { color: white }
  }
}
</style>

<!--
"archive_url":      "https://api.github.com/repos/cclarice/CodeGlossary/{archive_format}{/ref}",
assignees_url:      "https://api.github.com/repos/cclarice/CodeGlossary/assignees{/user}",
blobs_url:          "https://api.github.com/repos/cclarice/CodeGlossary/git/blobs{/sha}",
branches_url:       "https://api.github.com/repos/cclarice/CodeGlossary/branches{/branch}",
collaborators_url:  "https://api.github.com/repos/cclarice/CodeGlossary/collaborators{/collaborator}",
comments_url:       "https://api.github.com/repos/cclarice/CodeGlossary/comments{/number}",
commits_url:        "https://api.github.com/repos/cclarice/CodeGlossary/commits{/sha}",
compare_url:        "https://api.github.com/repos/cclarice/CodeGlossary/compare/{base}...{head}",
contents_url:       "https://api.github.com/repos/cclarice/CodeGlossary/contents/{+path}",
contributors_url:   "https://api.github.com/repos/cclarice/CodeGlossary/contributors",
deployments_url:    "https://api.github.com/repos/cclarice/CodeGlossary/deployments",
downloads_url:      "https://api.github.com/repos/cclarice/CodeGlossary/downloads",
events_url:         "https://api.github.com/repos/cclarice/CodeGlossary/events",
forks_url:          "https://api.github.com/repos/cclarice/CodeGlossary/forks",
git_commits_url:    "https://api.github.com/repos/cclarice/CodeGlossary/git/commits{/sha}",
git_refs_url:       "https://api.github.com/repos/cclarice/CodeGlossary/git/refs{/sha}",
git_tags_url:       "https://api.github.com/repos/cclarice/CodeGlossary/git/tags{/sha}",
git_url:            "git:github.com/cclarice/CodeGlossary.git",
issue_comment_url:  "https://api.github.com/repos/cclarice/CodeGlossary/issues/comments{/number}",
issue_events_url:   "https://api.github.com/repos/cclarice/CodeGlossary/issues/events{/number}",
issues_url:         "https://api.github.com/repos/cclarice/CodeGlossary/issues{/number}",
keys_url:           "https://api.github.com/repos/cclarice/CodeGlossary/keys{/key_id}",
labels_url:         "https://api.github.com/repos/cclarice/CodeGlossary/labels{/name}",
languages_url:      "https://api.github.com/repos/cclarice/CodeGlossary/languages",
merges_url:         "https://api.github.com/repos/cclarice/CodeGlossary/merges",
milestones_url:     "https://api.github.com/repos/cclarice/CodeGlossary/milestones{/number}",
notifications_url:  "https://api.github.com/repos/cclarice/CodeGlossary/notifications{?since,all,participating}",
pulls_url:          "https://api.github.com/repos/cclarice/CodeGlossary/pulls{/number}",
releases_url:       "https://api.github.com/repos/cclarice/CodeGlossary/releases{/id}",
ssh_url:            "git@github.com:cclarice/CodeGlossary.git",
stargazers_url:     "https://api.github.com/repos/cclarice/CodeGlossary/stargazers",
statuses_url:       "https://api.github.com/repos/cclarice/CodeGlossary/statuses/{sha}",
subscribers_url:    "https://api.github.com/repos/cclarice/CodeGlossary/subscribers",
subscription_url:   "https://api.github.com/repos/cclarice/CodeGlossary/subscription",
tags_url:           "https://api.github.com/repos/cclarice/CodeGlossary/tags",
teams_url:          "https://api.github.com/repos/cclarice/CodeGlossary/teams",
trees_url:          "https://api.github.com/repos/cclarice/CodeGlossary/git/trees{/sha}",
clone_url:          "https://github.com/cclarice/CodeGlossary.git",
mirror_url:         "git:git.example.com/cclarice/CodeGlossary",
hooks_url:          "https://api.github.com/repos/cclarice/CodeGlossary/hooks",
svn_url:            "https://svn.github.com/cclarice/CodeGlossary",
-->

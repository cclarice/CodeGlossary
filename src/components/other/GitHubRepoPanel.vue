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
      <img class="icon__white" src="@/assets/logos/github.svg" width="32" height="32" alt="GitHubIcon">
      <h2 @mousedown="clickUrl($event, repository && repository.html_url)">
        {{ repository && repository.name || 'Loading...' }}
      </h2>
      <img v-if="logo" :src="logo" width="32" height="32" alt="" @click="test">
    </div>
    <div class="GitBody">
      <div class="GitBodyInfo">
        <h4>Info</h4>
        <div class="GitBodyList">
          <div class="GitBodyListElement" v-if="codeSize">
            <img class="icon" src="@/assets/icons/platform/git/code.svg" alt="Code size">
            <span>{{ codeSize }}</span>
          </div>
          <div class="GitBodyListElement" v-if="totalSize">
            <img class="icon" src="@/assets/icons/platform/git/branch.svg" alt="Main branch size">
            <span>{{ totalSize }}</span>
          </div>
        </div>
      </div>
      <div class="GitBodyContributors">
        <h4>
          Contributors
          <span>
            {{ contributorsCount }}
          </span>
        </h4>
        <div v-for="contributor of contributors"
             :key="contributor.id"
             @mousedown="clickUrl($event, contributor.html_url)"
             class="GitBodyContributorsContributor">
          <img :src="contributor.avatar_url"
               alt="Avatar"
               width="32">
          <article>
            <span class="username">
              {{ contributor.login }}
            </span>
            <small>
              Contributions:
              <span class="count">
                {{ contributor.contributions }}
              </span>
              <span class="count">
                {{ (contributor.contributions / contributions * 100).toFixed(1) }}%
              </span>
            </small>
          </article>
        </div>
      </div>
      <div class="GitBodyLanguages">
        <h4>
          Languages
          <span>
            {{ languages ? Object.keys(languages).length : 0 }}
          </span>
        </h4>
        <div class="GitBodyLanguagesBar" v-if="languages">
          <div v-for="key of Object.keys(languages)" :key="key"
               style="height: 100%; flex-grow: 1; outline: 1px solid var(--panel-border);"
               :style="{ width: `${languages[key] * 100 / totalLanguages}%`, background: colors[key] || '#888888' }">
          </div>
        </div>
        <div class="GitBodyLanguagesList" v-if="languages">
          <div v-for="key of Object.keys(languages)" :key="key"
               style="display: flex; align-items: center; gap: 5px;">
            <div style="width: 12px; height: 12px; border-radius: 6px; outline: 1px solid var(--panel-border)"
                 :style="{ background: colors[key] || '#888888' }"/>
            <p>
              {{ key }}
              <small style="color: var(--disabled)">
                {{ `${(languages[key] * 100 / totalLanguages).toFixed(1)}%` }}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DebugPanel from '@/components/DebugPanel.vue'
import GitHub from '@/services/github'
import clickUrl from '@/library/clickUrl'
import { bytesToString } from '@/library/bytes'

interface Data {
  [key: string]: Response | Record<string, number | string > | null
}

export default defineComponent({
  name: 'GitHubRepoPanel',
  components: { DebugPanel },
  data: (): Data => ({
    repository: null,
    contributors: null,
    languages: null,
    colors: {
      CSS: '#563D7C',
      HTML: '#E34C26',
      JavaScript: '#F1E05A',
      SCSS: '#C6538C',
      TypeScript: '#2B7489',
      Vue: '#41B883'
    }
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
  computed: {
    totalSize () {
      return bytesToString((this.repository as { size: number } )?.size || 0, 'KB')
    },
    codeSize () {
      return bytesToString(this.totalLanguages)
    },
    totalLanguages (): number {
      return this.languages
        ? Object.values(this.languages as Record<string, number>).reduce((prev: number, curr: number): number => {
          return prev + curr
        }, 0)
        : 0
    },
    contributions (): number {
      return Array.isArray(this.contributors)
        ? this.contributors.reduce((prev, curr): number => {
          return prev + curr.contributions
        }, 0)
        : 0
    },
    contributorsCount (): number {
      return Array.isArray(this.contributors)
        ? this.contributors.length
        : 0
    }
  },
  created () {
    Promise.allSettled([
      GitHub.getRepo(this.repLink).then((response: XMLHttpRequest['response']) => (() => this.repository = response)),
      GitHub.getRepoContributors(this.repLink).then((response: XMLHttpRequest['response']) => (() => this.contributors = response)),
      GitHub.getRepoLanguages(this.repLink).then((response: XMLHttpRequest['response']) => (() => this.languages = response))
    ]).then((responses) => {
      responses.forEach((response) => {
        if (response.status === 'fulfilled' && response.value) {
          response.value()
        } else {
          console.error('Error', this.$options.name, responses)
        }
      })
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
  }
  &Body {
    display: flex;
    flex-flow: column;
    padding: 11px;
    gap: 20px;
    &Languages {
      &Bar {
        display: flex;
        width: 100%;
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
        max-width: 100%;
        justify-content: center;
        outline: 1px solid var(--panel-border);
      }
      &List {
        display: flex;
        flex-flow: row wrap;
        gap: 4px 12px;
      }
    }
    &List {
      padding: 8px 0 0;
      display: flex;
      flex-flow: column;
      gap: 4px;

      &Element {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
    &Languages,
    &Contributors {
      display: flex;
      flex-flow: column;
      gap: 6px;

      h4 {
        display: flex;
        align-items: center;
        gap: 4px;
        span {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          width: 22px;
          height: 22px;
          min-width: fit-content;
          padding: 0 4px 3px 4px;
          font-size: 16px;
          background-color: var(--panel-border);
          border-radius: 10px;
        }
      }
      &Contributor {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        border-radius: 2px;
        outline: 4px solid transparent;
        transition: outline 0.2s, background 0.2s;

        &:hover {
          background-color: var(--field-background);
          outline: 4px solid var(--field-background);
        }

        img {
          border-radius: 16px;
          border: 1px solid var(--panel-border);
          box-sizing: content-box;
        }
        .username {
          font-size: 16px;
        }
        article {
          display: flex;
          flex-flow: column;
          small {
            display: flex;
            gap: 4px;
            align-items: baseline;
          }
          .count {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 6px;
            border-radius: 6px;
            min-width: 32px;
            background-color: var(--panel-border);
            height: 18px;
          }
          .count:last-child {
            min-width: 52px;
          }
        }
        .contributions {

        }
      }
    }
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

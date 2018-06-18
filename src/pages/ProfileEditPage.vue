<template>
  <cabinet-layout>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="panel panel-white">
          <div class="panel-body">
            <div class="row">
              <div class="col-xs-12 col-md-7 col-lg-5 col-md-offset-2 col-lg-offset-4">
                <form class="m-t-md js-profile-edit-form" role="form" method="POST"
                      @submit.prevent="handleUpdateUserInfo">
                  <div class="form-group">
                    <label for="wallet"><strong>Номер bitcoin-кошелька: *</strong></label>
                    <input
                      autocomplete="wallet"
                      class="form-control"
                      id="wallet"
                      name="wallet"
                      type="text"
                      placeholder="Введи номер своего bitcoin-кошелька"
                      :value="loggedUser.wallet"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <hr/>

                  <div class="form-group">
                    <label for="firstName"><strong>Имя: *</strong></label>
                    <input
                      autocomplete="given-name"
                      class="form-control"
                      id="firstName"
                      name="first_name"
                      type="text"
                      placeholder="Введи свое имя"
                      :value="loggedUser.firstName"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <div class="form-group">
                    <label for="secondName"><strong>Фамилия: *</strong></label>
                    <input
                      autocomplete="family-name"
                      type="text"
                      class="form-control"
                      name="second_name"
                      id="secondName"
                      placeholder="Введи свою фамилию"
                      :value="loggedUser.secondName"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <div class="form-group">
                    <label for="phone"><strong>Телефон: *</strong></label>
                    <input
                      autocomplete="tel-national"
                      type="text"
                      class="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Введи свой телефонный номер"
                      :value="loggedUser.phone"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <div class="form-group">
                    <label for="email"><strong>E-mail: *</strong></label>
                    <input
                      autocomplete="email"
                      type="text"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Введи свой E-mail"
                      :value="loggedUser.email"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <hr/>

                  <div class="form-group">
                    <label for="odnoklassniki">Ссылка профиля в Одноклассниках:</label>
                    <input
                      autocomplete="url"
                      type="text"
                      class="form-control"
                      name="odnoklassniki"
                      id="odnoklassniki"
                      placeholder="Например, https://ok.ru/john.snow"
                      :value="loggedUser.odnoklassniki"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <div class="form-group">
                    <label for="instagram">Ссылка профиля в instagram:</label>
                    <input
                      autocomplete="url"
                      type="text"
                      class="form-control"
                      name="instagram"
                      id="instagram"
                      placeholder="Например, https://instagram.com/john.snow"
                      :value="loggedUser.instagram"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <div class="form-group">
                    <label for="facebook">Ссылка профиля в Facebook:</label>
                    <input
                      autocomplete="url"
                      type="text"
                      class="form-control"
                      name="facebook"
                      id="facebook"
                      placeholder="Например, https://facebook.com/john.snow"
                      :value="loggedUser.facebook"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <div class="form-group">
                    <label for="vk">Ссылка профиля в вКонтакте:</label>
                    <input
                      autocomplete="url"
                      type="text"
                      class="form-control"
                      name="vk"
                      id="vk"
                      placeholder="Например, https://vk.com/john.snow"
                      :value="loggedUser.vk"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <div class="form-group">
                    <label for="twitter">Ссылка профиля в Twitter:</label>
                    <input
                      autocomplete="url"
                      type="text"
                      class="form-control"
                      name="twitter"
                      id="twitter"
                      placeholder="Например, https://twitter.com/john.snow"
                      :value="loggedUser.twitter"
                      @input="this.PREPARE_USER_INFO_FOR_SAVE"
                    />
                  </div>

                  <div class="form-group">
                    <p><strong>Звездочкой (*) отмечены обязательные поля для заполнения</strong></p>
                  </div>

                  <div class="form-group text-right">
                    <router-link
                      :to="{ name: 'ProfilePage' }"
                      class="btn btn-danger m-t-xs m-r-xs col-md-4">Отмена</router-link>
                    <button
                      type="submit"
                      :class="{
                          'btn btn-success m-t-xs col-md-4': true,
                          'user-profile-button-saving': isUserProfileSavingProcess
                      }"
                    >Сохранить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </cabinet-layout>
</template>

<script>
  import { mapActions, mapMutations, mapGetters } from 'vuex'
  import CabinetLayout from '@/layouts/cabinet'

  export default {
    name: 'ProfileEditPage',

    metaInfo: {
      title: 'Редактирование профиля'
    },

    components: {
      CabinetLayout
    },

    computed: {
      ...mapGetters([
        'loggedUser',
        'isProfileNotReadyToSave',
        'isUserProfileSavingProcess'
      ])
    },

    methods: {
      ...mapMutations([
        'PREPARE_USER_INFO_FOR_SAVE'
      ]),
      handleUpdateUserInfo() {
        // this.$store.dispatch('UPDATE_USER_INFO')
      }
    }
  }
</script>

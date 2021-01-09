<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">
                          Sign in to site
                        </h1>
                        <div class="text-center my-2" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form @keydown.enter="login">
                          <v-text-field
                            label="Email"
                            name="email"
                            prepend-icon="email"
                            type="email"
                            color="teal accent-3"
                            v-model="logForm.email"
                          />
                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            v-model="logForm.password"
                          />
                        </v-form>
                        <h3 class="text-center mt-3">Forget your Password</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          type="submit"
                          form="login-form"
                          rounded
                          color="teal accent-3"
                          dark
                          @click.prevent="login"
                          >SIGN IN</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friends !</h1>
                        <h5 class="text-center">
                          Enter youre personal details and Start !
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">welcome Back !</h1>
                        <h5 class="text-center">To keep connented with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">
                          Create account
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon>fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form @keydown.enter="register">
                          <v-text-field
                            label="Name"
                            name="name"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            id="name"
                            v-model="regForm.name"
                          />
                          <v-text-field
                            label="UserName"
                            name="userName"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            id="userName"
                            v-model="regForm.userName"
                          />
                          <v-text-field
                            label="Email"
                            name="email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            id="email"
                            v-model="regForm.email"
                          />
                          <v-text-field
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            id="password"
                            v-model="regForm.password"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn
                          rounded
                          color="teal accent-3"
                          type="submit"
                          dark
                          @click.prevent="register"
                          >Register</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: "notDefault",
  data() {
    return {
      step: 1,
      regForm: {
        name: "",
        userName: "",
        email: "",
        password: "",
      },
      logForm: {
        email: "",
        password: "",
      },
    };
  },
  props: {
    source: String,
  },

  methods: {
    // async register() {
    //   try {
    //     await this.$axios.post("register", {
    //       name: this.logForm.email,
    //       username: this.logForm.username,
    //       email: this.logForm.email,
    //       password: this.logForm.password,
    //     });
    //     this.$router.push("/");
    //   } catch (e) {
    //     this.error = e.response.data.message;
    //   }
    // },

    async register() {
      try {
        await this.$auth.setUser("local", {
          data: {
            name: this.logForm.name,
            username: this.logForm.username,
            email: this.logForm.email,
            password: this.logForm.password,
          },
        });
        console.log(logForm.name);
      } catch (e) {
        console.log(e);
      }
      this.$router.push("/");
    },

    async login() {
      await this.$auth
        .loginWith("local", {
          data: {
            username: this.logForm.email,
            password: this.logForm.password,
          },
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(this.data);
      //this.$router.push("/");
    },
  },
};
</script>

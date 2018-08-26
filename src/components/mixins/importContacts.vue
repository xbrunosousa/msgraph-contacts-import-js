<script>
export default {
  name: 'importContacts',
  data() {
    return {
      clientId: '837fe74f-e66b-441f-8728-088de9fc6670',
      token: undefined,
      response: [],
    };
  },
  mounted() {},
  methods: {
    microsoftGo() {
      let scope = 'Contacts.Read';
      hello.init(
        {
          windows: this.clientId
        },
        {
          redirect_uri: 'http://localhost:8080',
          scope: scope
        }
      );
      hello('windows')
        .login({ scope: scope })
        .then(res => {
          this.$snotify.success('', '👨‍💻');
        })
        .finally(() => {
          setTimeout(() => {
            this.token = JSON.parse(
              localStorage.getItem('windows')
            ).access_token;
            this.runMicrosoft();
          }, 500);
        });
    },
    runMicrosoft() {
      fetch(
        'https://graph.microsoft.com/beta/me/contacts?$select=emailaddresses',
        {
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        }
      )
        .then(res => res.json())
        .then(res => {
          res.value.map(item => {
            this.response.push(item.emailAddresses[0].address);
          });
        })
        .catch(() => {
          // this.$snotify.error('', 'Deu ruim!');
        });
    }
  }
};
</script>
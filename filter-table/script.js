var chance = new Chance(88);

new Vue({
        el: "#app",
        data: {
          rows: [],
          columns: [
            {
              label: "id",
              name: "id",
              filter: {
                type: "simple",
                placeholder: "id"
              },
              sort: true,
              uniqueId: true
            },
            {
              label: "First Name",
              name: "name.first_name",
              filter: {
                type: "select",
                placeholder: "Enter first name",
                mode: "multi",
                options:[
                  {
                    "name" : "Irwin",
                    "value" : "Irwin"
                  },
                  {
                    "name" : "Don",
                    "value" : "Don"
                  },
                  {
                    "name" : "Lolita Paris",
                    "value" : "Lolita"
                  }
                ]
              },
              sort: true,
              // slot_name: "my_duplicate_id_column"
            },
            {
              label: "Last Name",
              name: "name.last_name",
              filter: {
                type: "simple",
                placeholder: "Enter last name",
                case_sensitive: true
              },
              sort: true,
            },
            {
              label: "Email",
              name: "email",
              filter: {
                type: "simple",
                placeholder: "Enter email"
              },
              sort: true,
              row_text_alignment: "text-left",
              column_text_alignment: "text-left",
            },
            {
              label: "City",
              name: "address.city",
              sort: true
            },
            {
              label: "Country",
              name: "address.country",
              filter: {
                type: "simple",
                placeholder: "Enter country"
              },
            },
          ],
          actions: [
            {
              btn_text: "Download",
              event_name: "on-download",
              event_payload: {
                msg: "my custom message"
              }
            }
          ],
          config: {
            pagination: true,
            pagination_info: true,
            num_of_visibile_pagination_buttons: 7,
            per_page: 10,
            checkbox_rows: true,
            highlight_row_hover: true,
            rows_selectable: true,
            multi_column_sort: false,
            // highlight_row_hover_color:"grey",
            card_title: "Vue Bootsrap 4 advanced table",
            card_mode: false,
            selected_rows_info:true,
             per_page_options: [5, 10, 20, 30],
          },
          classes: {
            table: "table-bordered table-striped"
          }
        },
        methods: {
            onDownload(payload) {
              alert(payload.msg)
            }
        },
    
        mounted() {
          let user;
          let users = [];
          for (let i = 1; i <=500; i++) {
            user = {
              id : i,
              name: {
                first_name: chance.first(),
                last_name: chance.last(),
              },
              age: chance.age(),
              address: {
                city: chance.city(),
                street: chance.address(),
                country: chance.country({ full: true })
              },
              salary: chance.integer({ min: 1500, max: 3000 }),
              email: chance.email(),
              website: chance.domain(),
              mobile: chance.phone()
            }
            users.push(user);
          }
          this.rows = users;
        },
    })
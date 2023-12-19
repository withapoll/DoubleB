<template>
  <div>
    <div class="cards">
      <div class="card">
        <div class="card_header">
          <p>Сотрудники</p>
          <div class="card_header_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_395_71)">
                <path
                  d="M9.75 3C9.55109 3 9.36032 3.07902 9.21967 3.21967C9.07902 3.36032 9 3.55109 9 3.75C9 3.94891 9.07902 4.13968 9.21967 4.28033C9.36032 4.42098 9.55109 4.5 9.75 4.5H14.25C14.4489 4.5 14.6397 4.42098 14.7803 4.28033C14.921 4.13968 15 3.94891 15 3.75C15 3.55109 14.921 3.36032 14.7803 3.21967C14.6397 3.07902 14.4489 3 14.25 3H9.75ZM16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5C10.8065 16.5 9.66193 16.0259 8.81802 15.182C7.97411 14.3381 7.5 13.1935 7.5 12C7.5 10.8065 7.97411 9.66193 8.81802 8.81802C9.66193 7.97411 10.8065 7.5 12 7.5C13.1935 7.5 14.3381 7.97411 15.182 8.81802C16.0259 9.66193 16.5 10.8065 16.5 12Z"
                  fill="black"
                />
                <path
                  d="M6.75 0C5.75544 0 4.80161 0.395088 4.09835 1.09835C3.39509 1.80161 3 2.75544 3 3.75V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V3.75C21 2.75544 20.6049 1.80161 19.9016 1.09835C19.1984 0.395088 18.2446 0 17.25 0L6.75 0ZM4.5 3.75C4.5 3.15326 4.73705 2.58097 5.15901 2.15901C5.58097 1.73705 6.15326 1.5 6.75 1.5H17.25C17.8467 1.5 18.419 1.73705 18.841 2.15901C19.2629 2.58097 19.5 3.15326 19.5 3.75V19.9425C19.1402 19.6547 18.7498 19.4072 18.336 19.2045C17.088 18.5805 15.0945 18 12 18C8.9055 18 6.912 18.5805 5.664 19.2045C5.25018 19.4072 4.85984 19.6547 4.5 19.9425V3.75Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_395_71">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <h3>15</h3>
        <div class="card_footer">
          <div class="human-photos">
            <img
              v-for="human in all_humans"
              :key="human.id"
              :src="human.photo"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card_header">
          <p>На больничном</p>
          <div class="card_header_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.0003 11H13.0003V9.99997C13.0003 9.73475 12.8949 9.4804 12.7074 9.29286C12.5198 9.10533 12.2655 8.99997 12.0003 8.99997C11.7351 8.99997 11.4807 9.10533 11.2932 9.29286C11.1056 9.4804 11.0003 9.73475 11.0003 9.99997V11H10.0003C9.73506 11 9.4807 11.1053 9.29317 11.2929C9.10563 11.4804 9.00028 11.7348 9.00028 12C9.00028 12.2652 9.10563 12.5195 9.29317 12.7071C9.4807 12.8946 9.73506 13 10.0003 13H11.0003V14C11.0003 14.2652 11.1056 14.5195 11.2932 14.7071C11.4807 14.8946 11.7351 15 12.0003 15C12.2655 15 12.5198 14.8946 12.7074 14.7071C12.8949 14.5195 13.0003 14.2652 13.0003 14V13H14.0003C14.2655 13 14.5198 12.8946 14.7074 12.7071C14.8949 12.5195 15.0003 12.2652 15.0003 12C15.0003 11.7348 14.8949 11.4804 14.7074 11.2929C14.5198 11.1053 14.2655 11 14.0003 11ZM20.1603 4.99997C19.094 3.94467 17.6856 3.30524 16.1893 3.19705C14.693 3.08886 13.2073 3.51904 12.0003 4.40997C10.7279 3.46361 9.14427 3.03448 7.5682 3.20901C5.99212 3.38353 4.54072 4.14875 3.50625 5.35055C2.47178 6.55236 1.9311 8.10149 1.99308 9.68598C2.05506 11.2705 2.71509 12.7726 3.84028 13.89L9.84028 19.94C10.4028 20.5018 11.1653 20.8173 11.9603 20.8173C12.7553 20.8173 13.5178 20.5018 14.0803 19.94L20.0803 13.89C20.6712 13.3126 21.1422 12.6242 21.4662 11.8642C21.7902 11.1042 21.9609 10.2877 21.9683 9.4616C21.9757 8.63548 21.8198 7.81603 21.5095 7.05035C21.1993 6.28467 20.7407 5.58786 20.1603 4.99997ZM18.7503 12.46L12.7503 18.46C12.6573 18.5537 12.5467 18.6281 12.4249 18.6789C12.303 18.7296 12.1723 18.7558 12.0403 18.7558C11.9083 18.7558 11.7776 18.7296 11.6557 18.6789C11.5338 18.6281 11.4232 18.5537 11.3303 18.46L5.33028 12.46C4.54603 11.6583 4.10689 10.5814 4.10689 9.45997C4.10689 8.3385 4.54603 7.26162 5.33028 6.45997C6.12943 5.67096 7.20725 5.22854 8.33028 5.22854C9.4533 5.22854 10.5311 5.67096 11.3303 6.45997C11.4232 6.5537 11.5338 6.62809 11.6557 6.67886C11.7776 6.72963 11.9083 6.75577 12.0403 6.75577C12.1723 6.75577 12.303 6.72963 12.4249 6.67886C12.5467 6.62809 12.6573 6.5537 12.7503 6.45997C13.5494 5.67096 14.6272 5.22854 15.7503 5.22854C16.8733 5.22854 17.9511 5.67096 18.7503 6.45997C19.5405 7.26252 19.9835 8.34365 19.9835 9.46997C19.9835 10.5963 19.5405 11.6774 18.7503 12.48V12.46Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <h3>4</h3>
        <div class="card_footer">
          <div class="human-photos">
            <img 
            v-for="human in ill_humans"
              :key="human.id"
              :src="human.photo"
              width="40"
              height="40"
            />
        </div>
        </div>
      </div>
      <div class="card">
        <div class="card_header">
          <p>В отпуске</p>
          <div class="card_header_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.0534 1.56006C6.17339 1.56006 1.38672 5.74673 1.38672 10.8934C1.38672 16.0401 6.17339 20.2267 12.0534 20.2267C13.1625 20.2287 14.2664 20.0761 15.3334 19.7734L19.0201 22.1201C19.1686 22.2153 19.3489 22.2477 19.5214 22.2102C19.6939 22.1727 19.8444 22.0684 19.9401 21.9201C20.0094 21.8128 20.0464 21.6878 20.0467 21.5601V17.0734C20.8809 16.2732 21.5465 15.3142 22.0045 14.2528C22.4625 13.1915 22.7035 12.0493 22.7134 10.8934C22.7201 5.74673 17.9334 1.56006 12.0534 1.56006ZM18.9134 16.3001C18.8464 16.3622 18.7928 16.4375 18.7561 16.5212C18.7194 16.6049 18.7003 16.6953 18.7001 16.7867V20.3467L15.7801 18.4867C15.6986 18.4352 15.607 18.402 15.5114 18.3894C15.4159 18.3767 15.3188 18.3849 15.2267 18.4134C14.1992 18.7325 13.1293 18.8944 12.0534 18.8934C6.90672 18.8934 2.72005 15.3067 2.72005 10.8934C2.72005 6.48006 6.90672 2.89339 12.0534 2.89339C17.2001 2.89339 21.3867 6.48006 21.3867 10.8934C21.3707 11.9166 21.1426 12.9254 20.7169 13.856C20.2912 14.7867 19.6771 15.6189 18.9134 16.3001Z"
                fill="black"
              />
              <path
                d="M20.7334 10.5467L20.6667 10.4467L19.0001 8.96003C18.7855 8.76477 18.5339 8.61459 18.2602 8.5184C17.9865 8.4222 17.6963 8.38195 17.4067 8.40003L13.8201 8.6267L11.4267 6.6267C11.3296 6.54507 11.2069 6.50023 11.0801 6.50003H9.04006C8.94649 6.49898 8.85436 6.52319 8.7734 6.57013C8.69244 6.61706 8.62565 6.68497 8.58006 6.7667C8.53249 6.8463 8.50737 6.9373 8.50737 7.03003C8.50737 7.12277 8.53249 7.21377 8.58006 7.29337L9.48673 8.92003L6.34673 9.11337L7.22006 10.1267L17.4801 9.46003C17.628 9.45057 17.7762 9.47108 17.916 9.52034C18.0558 9.5696 18.1841 9.6466 18.2934 9.7467L19.8667 11.1667C19.8718 11.1818 19.8718 11.1982 19.8667 11.2134C19.8667 11.2534 19.8067 11.2467 19.8001 11.2534H14.5467L14.3134 11.5L10.8534 15.1867H9.76006L11.5801 11.2534H5.6934L4.7534 9.44003L4.34006 8.6667C4.26181 8.57039 4.15242 8.50437 4.03073 8.48004C3.90904 8.4557 3.78268 8.47456 3.6734 8.53337C3.549 8.60345 3.45741 8.71994 3.41868 8.85737C3.37995 8.9948 3.39723 9.14197 3.46673 9.2667L4.80006 11.8934C4.86867 12.0248 4.97216 12.1347 5.09918 12.2112C5.2262 12.2876 5.37182 12.3276 5.52006 12.3267H9.90006L8.60673 15.1134C8.55033 15.2368 8.52624 15.3725 8.53674 15.5078C8.54723 15.6431 8.59197 15.7735 8.66673 15.8867C8.73878 15.9988 8.83725 16.0914 8.95349 16.1565C9.06974 16.2216 9.2002 16.2572 9.3334 16.26H10.9534C11.064 16.2608 11.1736 16.238 11.2747 16.1932C11.3759 16.1483 11.4663 16.0825 11.5401 16L14.9934 12.3267H19.7667C19.9758 12.3324 20.1822 12.2783 20.3617 12.1709C20.5412 12.0634 20.6863 11.907 20.7801 11.72C20.8774 11.538 20.9244 11.3333 20.9162 11.127C20.908 10.9208 20.8449 10.7204 20.7334 10.5467ZM9.94673 7.54003H10.8867L12.2801 8.72003L10.6667 8.82003L9.94673 7.54003Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <h3>4</h3>
        <div class="card_footer">
          <div class="human-photos">
            <img 
            v-for="human in vacation_humans"
              :key="human.id"
              :src="human.photo"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content-header">
    <div class="search-container">
      <input type="text" v-model="search" placeholder="Что будем искать?" />
    </div>
    <div class="right-content">
      <div class="filter">
        <div class="filter-container">
          <select v-model="filter">
            <option value="all">Все</option>
            <option value="shops">Кофейня</option>
            <option value="contacts">Контакты</option>
            <option value="status">Статус</option>
            <option value="salary">Доход</option>
          </select>
        </div>
      </div>
      <div>
        <button id="importHumans" @click="importFile">
          Импортировать
          <i class="fa-solid fa-plus"></i>
        </button>
        <input
          type="file"
          ref="fileInput"
          @change="handleFileImport"
          style="display: none"
        />
      </div>
    </div>
  </div>
  <div class="human-table">
    <table>
      <tr v-for="employee in filteredEmployees" :key="employee.id"></tr>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.text">
            <i :class="header.icon"></i> {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
 <tr v-for="human in filteredEmployees" :key="human.id">
 <td class="human-info">
   <img class="human-photo" :src="require(`@/assets/humans/${human.image}`)" alt="Human photo" width="50" height="50">
   <span class="human-name">{{ human.name }}</span>
 </td>
 <td>{{ human.workadress }}</td>
 <td>{{ human.contacts }}</td>
 <td>{{ human.status }}</td>
 <td>{{ human.income }}</td>
 </tr>
</tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const all_humans = ref([
  {
    id: 1,
    photo: require(`@/assets/humans/human3.png`),
  },
  {
    id: 2,
    photo: require(`@/assets/humans/human4.png`),
  },
  {
    id: 3,
    photo: require(`@/assets/humans/human5.png`),
  },
  {
    id: 4,
    photo: require(`@/assets/humans/human1.png`),
  }
]);

const ill_humans = ref([
  {
    id: 1,
    photo: require(`@/assets/humans/human10.png`),
  },
  {
    id: 2,
    photo: require(`@/assets/humans/human11.png`),
  },
  {
    id: 3,
    photo: require(`@/assets/humans/human12.png`),
  },
  {
    id: 4,
    photo: require(`@/assets/humans/human13.png`),
  },
]);

const vacation_humans = ref([
  {
    id: 1,
    photo: require(`@/assets/humans/human6.png`),
  },
  {
    id: 2,
    photo: require(`@/assets/humans/human7.png`),
  },
  {
    id: 3,
    photo: require(`@/assets/humans/human8.png`),
  },
  {
    id: 4,
    photo: require(`@/assets/humans/human9.png`),
  },

]); 

const humans = ref([
  { id: 1, name: 'Соня Глуцкова', workadress: 'ул. Театральный проспект 42б', contacts: 's.gluczkova@double.com', status: 'На месте', income: '45 750₽', image: 'human2.png' },
  { id: 2, name: 'Марк Трофимов', workadress: 'ул. Театральный проспект 42б', contacts: 'm.trofimov@double.com', status: 'Отсутствует', income: '35 840₽', image: 'human3.png' },
  { id: 3, name: 'Олег Тин', workadress: 'ул. Театральный проспект 42б', contacts: 'o.tin@double.com', status: 'На месте', income: '52 350₽', image: 'human4.png' },
  { id: 4, name: 'Анна Дмитриева', workadress: 'ул. Театральный проспект 42б', contacts: 'a.dmitrieva@double.com', status: 'Отсутствует', income: '43 750₽', image: 'human5.png' },
  { id: 5, name: 'Виктория Иванова', workadress: 'ул. Театральный проспект 42б', contacts: 'v.ivanova@double.com', status: 'На месте', income: '38 650₽', image: 'human6.png' },
  { id: 6, name: 'Саша Белова', workadress: 'ул. Театральный проспект 42б', contacts: 's.belova@double.com', status: 'На месте', income: '38 920₽', image: 'human7.png' },
  { id: 7, name: 'Александр Смирнов', workadress: 'ул. Театральный проспект 42б', contacts: 'a.smirnov@double.com', status: 'Опаздывает', income: '31 430₽', image: 'human8.png' },
  { id: 8, name: 'Виктория Кузнецова', workadress: 'ул. Театральный проспект 42б', contacts: 'v.kuznetsova@double.com', status: 'На месте', income: '35 650₽', image: 'human9.png' },
  { id: 9, name: 'Антон Петров', workadress: 'ул. Театральный проспект 42б', contacts: 'a.petrov@double.com', status: 'Опаздывает', income: '38 920₽', image: 'human10.png' },
  { id: 10, name: 'Даниил Николаев', workadress: 'ул. Театральный проспект 42б', contacts: 'd.nikolaev@double.com', status: 'Опаздывает', income: '44 320₽', image: 'human11.png' },
  { id: 11, name: 'Юля Петрова', workadress: 'ул. Театральный проспект 42б', contacts: 'j.petrova@double.com', status: 'На месте', income: '40 290₽', image: 'human12.png' },
  { id: 12, name: 'Мария Алексеева', workadress: 'ул. Театральный проспект 42б', contacts: 'm.alexeva@double.com', status: 'На месте', income: '38 420₽', image: 'human13.png' },
  { id: 13, name: 'Мария Ивлева', workadress: 'ул. Театральный проспект 42б', contacts: 'm.ivleva@double.com', status: 'Отсутствует', income: '37 220₽', image: 'human14.png' },
  { id: 14, name: 'Кирилл Николаев', workadress: 'ул. Театральный проспект 42б', contacts: 'k.nicolaev@double.com', status: 'Опаздывает', income: '35 920₽', image: 'human15.png' },
  { id: 15, name: 'Андрей Лебедев', workadress: 'ул. Театральный проспект 42б', contacts: 'a.lebedev@double.com', status: 'Отсутствует', income: ' 0.1₽', image: 'human1.png' },
]);

let search = ref('');
let filter = ref('all');
let employees = humans;

let filteredEmployees = computed(() => {
  let results = employees.value;
  if (search.value) {
    results = results.filter(employee =>
      Object.values(employee).some(val =>
        val.toString().toLowerCase().includes(search.value.toLowerCase())
      )
    );
  }
  if (filter.value !== 'all') {
    results = results.filter(employee => employee[filter.value]);
  }
  return results;
});

const fileInput = ref(null);
const importFile = () => {
  fileInput.value.click();
};
const handleFileImport = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    // The file's text will be printed here
    console.log(e.target.result);
  };

  reader.readAsText(file);
};

const headers = ref([
  { text: 'ФИО Сотрудника', icon: 'fas fa-user' },
  { text: 'Место работы', icon: 'fas fa-map-marker-alt' },
  { text: 'Контакты', icon: 'fas fa-envelope' },
  { text: 'Статус', icon: 'fas fa-info-circle' },
  { text: 'Доход', icon: 'fas fa-dollar-sign' }
]);


</script>

<style lang="scss" scoped>
.cards {
  display: flex;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 30px;
  margin-right: 10px;
  padding: 24px;
  height: 150px;
  width: 228px;
  flex-shrink: 1;
  font-family: "Inter", sans-serif;
  font-size: 16px;

  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 178px;
    & .card_header_icon {
      background-color: #eee;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &_footer {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    width: 178px;
    margin-top: 10px;
  }

}

.content-header {
  display: flex;
  & #importHumans {
    background-color: #dde144;
    border-radius: 15px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    width: 195px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
  }

  .right-content {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    & .filter {
      display: flex;
      align-items: center;
      margin-top: 20px;

      select {
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 15px;
        font-size: 16px;
        outline: none;
      }
    }
  }
}

.search-container {
  display: flex;
  margin-top: 20px;

  input[type="text"] {
    width: 409px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    font-size: 16px;
    outline: none;
  }
}

.human-table {
  margin-top: 20px;
  background-color: white;
  border: solid 1px rgba(224, 224, 224, 1);
  border-radius: 30px;
  padding: 15px;
  table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      border-bottom: 1px solid rgba(224, 224, 224, 1);
      padding: 16px;
      text-align: left;
    }
    th {
      color: rgba(0, 0, 0, 0.54);
      font-weight: 500;
      background-color: rgb(255, 255, 255);
      color: black;
      font-family: "Inter", sans-serif;
    }
    td {
      text-align: center;
      align-items: center;
    }
    tr:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }
  }
  .human-info {
  display: flex;
  align-items: center;
}

.human-photo {
  margin-right: 15px;
}

.human-name {
  text-align: center;
  width: 90px;
}
}
</style>

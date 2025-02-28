<template>
  <div class="dropdown-container">
    <div class="dropdown-trigger" @click="toggleDropdown" :class="{ 'active': isOpen }">
      <span :class="{ 'selected': selectedOption && selectedOption.name !== 'Все номинации' }">
        {{ selectedOption ? selectedOption.name : 'Все номинации' }}
      </span>
      <span class="dropdown-arrow"></span>
    </div>
    <div class="dropdown-list" v-if="isOpen">
      <div class="dropdown-option" v-for="option in nominations" :key="option.id" @click="selectOption(option)">
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NominationFilter',
  props: {
    nominations: {
      type: Array,
      default: () => [
        { id: null, name: 'Все номинации' }, // null для "Все номинации"
        { id: 1, name: 'ИТ-Женщина 2025' },
        { id: 2, name: 'Инновации в талантах' },
        { id: 3, name: 'ИТ в продвижении и продажах' },
        { id: 4, name: 'Технология 2025' },
        { id: 5, name: 'Импортозамещение 2025' },
        { id: 6, name: 'Инновации в ИТ' },
        { id: 7, name: 'Волшебница финансов' }
      ]
    }
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null // Сохраняем объект { id, name }
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option; // Сохраняем полный объект
      this.isOpen = false; // Закрываем список после выбора
      this.$emit('update', option.id || null); // Эмитим id (null для "Все номинации")
    },
    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
};
</script>

<style scoped>
.dropdown-container {
  position: relative;
  width: 282px;
  margin-bottom: 20px;
  font-family: 'Ubuntu Mono', monospace;
}

.dropdown-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 100px;
  background-color: #F5F5F6;
  cursor: pointer;
  color: #81828B;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  transition: border-color 0.3s ease;
}

.dropdown-trigger:hover {
  border-color: #689B32;
}

.dropdown-trigger.active {
  border-color: #689B32;
  color: #040718;
}

.dropdown-arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #040718;
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.dropdown-trigger.active .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-trigger span {
  color: #81828B; /* Серый по умолчанию (для "Все номинации") */
}

.dropdown-trigger span.selected {
  color: #040718; /* Черный для выбранных номинаций */
}

.dropdown-list {
  position: absolute;
  top: 130%;
  left: -100px;
  right: 0;
  width: 382px;
  background-color: #F5F5F6;

  border-radius: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: slideDown 0.3s ease-out;
}

.dropdown-option {
  padding: 12px 16px;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;


}

.dropdown-option:hover {
  background-color: #d6d6d6;
  border-radius: 24px;
}

.dropdown-option:last-child {
  border-bottom: none;
  border-radius: 0 0 24px 24px;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Адаптивность для мобильных устройств */
@media screen and (max-width: 768px) {
  .dropdown-container {
    width: 150px;
  }

  .dropdown-trigger,
  .dropdown-option {
    font-size: 14px;
    padding: 10px 12px;
  }

  .dropdown-list {
    left: 0;
    width: 250px;
  }
}
</style>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import { EditIcon, TrashIcon } from 'vue-tabler-icons';
import { useRouter } from 'vue-router';

const router = useRouter();

// Définition de l'interface User
interface User {
  id: string;
  email: string;
  role: string;
}

// Liste des utilisateurs avec typage correct
const users = ref<User[]>([]);
const searchQuery = ref("");
const sortKey = ref<keyof User>("email"); // Typage correct
const sortOrder = ref(1);

// Correspondance des rôles avec noms et couleurs
const roleMapping: Record<string, { name: string; color: string }> = {
  admin: { name: "Administrateur", color: "#FF3D00" },
  gestio: { name: "Gestionnaire", color: "#2979FF" },
  user: { name: "Utilisateur", color: "#00C853" }
};

const getRoleName = (role: string) => roleMapping[role]?.name || "Non spécifié";
const getRoleColor = (role: string) => roleMapping[role]?.color || "#BDBDBD";

// Liste triée des utilisateurs
const sortedUsers = computed(() => {
  return [...users.value].sort((a, b) => {
    const key = sortKey.value;
    return String(a[key]).localeCompare(String(b[key])) * sortOrder.value;
  });
});

// Filtrage des utilisateurs
const filteredUsers = computed(() => {
  return sortedUsers.value.filter(user =>
    user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Récupération des utilisateurs depuis l'API Flask
const fetchUsers = async () => {
  try {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token');
    const response = await axios.get<User[]>('http://127.0.0.1:5000/api/users', {
      headers: { Authorization: `Bearer ${token}` },
    });
    users.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
  }
};

onMounted(fetchUsers);

// Fonction de tri
const sortByColumn = (key: keyof User) => {
  if (sortKey.value === key) {
    sortOrder.value *= -1;
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
};

// Fonctions d'action utilisateur (remplacer avec la logique appropriée)
const addUser = () => console.log("Ajouter un utilisateur");
const deleteUser = (userId: string) => console.log("Supprimer", userId);
const editUser = (userId: string) => console.log("Modifier", userId);
</script>

<template>
  <v-row class="maxWidth">
    <v-col cols="12">
      <UiChildCard title="Registre des utilisateurs">
        <v-row class="mb-4">
          <v-col cols="12" sm="6">
            <v-text-field v-model="searchQuery" label="Rechercher un utilisateur" clearable prepend-inner-icon="mdi-magnify" />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-start">
            <v-btn color="primary" @click="addUser" style="margin-top: 6px;">Ajouter</v-btn>
          </v-col>
        </v-row>

        <table class="user-table">
          <thead>
            <tr>
              <th @click="sortByColumn('email')">Courriel</th>
              <th @click="sortByColumn('role')">Rôle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredUsers" :key="user.id">
              <td>{{ user.email }}</td>
              <td>
                <span :style="{ color: getRoleColor(user.role) }">
                  {{ getRoleName(user.role) }}
                </span>
              </td>
              <td>
                <EditIcon class="mr-2" style="cursor: pointer;" @click="editUser(user.id)" color="#0085db" />
                <TrashIcon style="cursor: pointer;" @click="deleteUser(user.id)" color="#fb977d" />
              </td>
            </tr>
          </tbody>
        </table>
      </UiChildCard>
    </v-col>
  </v-row>
</template>

<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
}
.user-table th, .user-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.user-table th {
  cursor: pointer;
  background-color: #f4f4f4;
}
</style>

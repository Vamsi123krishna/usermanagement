import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsers } from '../context/UserContext';
import {
  ArrowLeft,
  Mail,
  Phone,
  Globe,
  Building2,
  MapPin,
} from 'lucide-react';

export function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { users } = useUsers();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500">User not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Users
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {user.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">
                {user.email}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700 dark:text-gray-300">
                {user.phone}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                {user.website}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {user.company.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.company.catchPhrase}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-gray-700 dark:text-gray-300">
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
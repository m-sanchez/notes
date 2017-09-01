
export function persistenceService($window) {
  return {
    getStorage,
    setStorage
  };

  function getStorage(key) {
    return angular.fromJson($window.localStorage.getItem(key));
  }

  function setStorage(key, value) {
    if (value) {
      $window.localStorage.setItem(key, angular.toJson(value));
    } else {
      $window.localStorage.removeItem(key);
    }
  }
}


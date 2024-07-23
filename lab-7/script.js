
    document.addEventListener('DOMContentLoaded', function () {
      var lastModified = document.lastModified;
      document.getElementById('lastModified').textContent = lastModified;

      var form = document.getElementById('mad-lib-form');
      var resultOutput = document.getElementById('result');

      form.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = {
          pluralNoun: document.getElementById('plural-noun').value,
          adjective: document.getElementById('adjective').value,
          verb: document.getElementById('verb').value,
          noun: document.getElementById('noun').value,
          conjunction: document.getElementById('conjunction').value
        };

        var story = `Once upon a time, a group of ${formData.pluralNoun} lived in a magical forest. They were known for their ${formData.adjective} adventures and their love for ${formData.verb}. One day, they stumbled upon an ancient ${formData.noun} ${formData.conjunction} they decided to protect as a sacred artifact.`;

        resultOutput.textContent = story;
      });
    });

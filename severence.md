---
layout: default
permalink: /ccc-severence
---
<script>
function calculateSeverence() {
    factor = Math.floor(Math.random() * 2 + 1)
    document.getElementById('severence').innerHTML = `You are entitled to: ${factor} shot(s) of Pfeffi</br>please see one of our People Partners for payout`;
}
</script>

{% raw %}
Welcome ${{employee_name}},
<br />
To calculate your severance package, please fill out the following form:
<form onsubmit="return false;">
    <label for="job">Job title</label>
    <input type="text" name="job" />
    <br/>
    <label for="tenure">How long have you been working for $${{company}}?</label>
    <input type="text" name="tenure" />
    <br/>
    <label for="kids">How many dependants do you have?</label>
    <input type="text" name="kids" />
    <br />
    <input type="submit" text="Calulate severence pay" onClick="calculateSeverence();" />
</form>
<label id="severence" />
{% endraw %}
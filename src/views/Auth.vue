<template>
    <div class="auth-page">
        <div class="wrap">
            <div class="form">
                <header>Therapist Login</header>
                <login-form></login-form>
            </div>
            <div class="request">
                <header>Fileholder Request</header>
                <div class="field">
                    <label class="label"></label>
                    <button @click="$router.push('/request')" class="button is-primary is-fullwidth">Submit New Request</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loginForm from '@/components/auth-forms/login'
export default {
    name: 'Auth-View',
    components: {
        loginForm
    }
}
</script>

<style scoped lang="scss">

            header {
            font-size: 1rem;
            font-weight: 600;
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: 1px solid #eaeaea;
        }

    .auth-page {
        flex:1;
        display: flex;
        align-items: center;
        justify-content: center;
        .wrap {
            display: flex;
            transform: translateY(-25%);
            > div {
                padding-right: 12px;
                margin-right: 12px;
                width: 320px;
                border-right: 1px solid #eaeaea;
                &:last-child {
                    border-right: none;
                }
            }
        }
    }

    .request {
        button {
            margin-top: 44px;
        }
    }
</style>
